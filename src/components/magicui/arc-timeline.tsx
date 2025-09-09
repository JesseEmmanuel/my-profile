"use client"
import { cn } from "../../lib/utils"
import { type ComponentPropsWithoutRef, type ReactNode, useState } from "react"

export interface ArcTimelineItem {
  time: ReactNode
  steps: Array<{
    image?: string
    icon?: ReactNode
    content: ReactNode
  }>
}
interface ArcTimelineProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * The data of the arc timeline
   */
  data: ArcTimelineItem[]
  /**
   * The configuration of the arc timeline
   */
  arcConfig?: {
    /**
     * The width of the circle, default is 5000
     */
    circleWidth?: number
    /**
     * The angle between minor steps, default is 0.35
     */
    angleBetweenMinorSteps?: number
    /**
     * The number of lines to fill between steps, default is 10
     */
    lineCountFillBetweenSteps?: number
    /**
     * The number of lines to fill in before the first step and after the last step
     */
    boundaryPlaceholderLinesCount?: number
  }
  /**
   * The default active step
   */
  defaultActiveStep?: {
    /**
     * The time of the default active step
     */
    time?: string
    /**
     * The index of the default active step
     */
    stepIndex?: number
  }
}

export function ArcTimeline(props: ArcTimelineProps) {
  const { className, children, data, arcConfig = {}, defaultActiveStep = {}, ...restProps } = props

  const {
    circleWidth = 5000,
    angleBetweenMinorSteps = 0.35,
    lineCountFillBetweenSteps = 10,
    boundaryPlaceholderLinesCount = 50,
  } = arcConfig

  const { time: defaultActiveTime = data[0].time, stepIndex: defaultActiveStepIndex = 0 } = defaultActiveStep || {}

  const totalSteps = data.reduce((total, item) => total + item.steps.length, 0)

  const [currentGlobalStepIndex, setCurrentGlobalStepIndex] = useState(() => {
    let count = 0
    for (let i = 0; i < data.length; i++) {
      if (data[i].time === defaultActiveTime) {
        return count + defaultActiveStepIndex
      }
      count += data[i].steps.length
    }
    return 0
  })

  const [circleContainerRotateDeg, setCircleContainerRotateDeg] = useState(() => {
    return (
      -1 * currentGlobalStepIndex * angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1) -
      angleBetweenMinorSteps * boundaryPlaceholderLinesCount
    )
  })

  const navigateToPrevious = () => {
    if (currentGlobalStepIndex > 0) {
      const newGlobalIndex = currentGlobalStepIndex - 1
      setCurrentGlobalStepIndex(newGlobalIndex)

      const newRotation =
        -1 * newGlobalIndex * angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1) -
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
      setCircleContainerRotateDeg(newRotation)
    }
  }

  const navigateToNext = () => {
    if (currentGlobalStepIndex < totalSteps - 1) {
      const newGlobalIndex = currentGlobalStepIndex + 1
      setCurrentGlobalStepIndex(newGlobalIndex)

      const newRotation =
        -1 * newGlobalIndex * angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1) -
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
      setCircleContainerRotateDeg(newRotation)
    }
  }

  const getCurrentTimelineItem = () => {
    let count = 0
    for (let i = 0; i < data.length; i++) {
      const startIndex = count
      const endIndex = count + data[i].steps.length - 1
      if (currentGlobalStepIndex >= startIndex && currentGlobalStepIndex <= endIndex) {
        return data[i]
      }
      count += data[i].steps.length
    }
    return data[0]
  }

  const currentTimelineItem = getCurrentTimelineItem()

  return (
    <div {...restProps} className={cn("relative h-[380px] w-full overflow-hidden", className)}>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={navigateToPrevious}
          disabled={currentGlobalStepIndex === 0}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200",
            "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600",
            "hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-gray-800",
            "shadow-sm hover:shadow-md",
          )}
          aria-label="Previous content step"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600 dark:text-gray-300"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                index === currentGlobalStepIndex ? "bg-gray-600 dark:bg-gray-300" : "bg-gray-300 dark:bg-gray-600",
              )}
            />
          ))}
        </div>

        <button
          onClick={navigateToNext}
          disabled={currentGlobalStepIndex === totalSteps - 1}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200",
            "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600",
            "hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-gray-800",
            "shadow-sm hover:shadow-md",
          )}
          aria-label="Next content step"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600 dark:text-gray-300"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 text-center">
        <div className="text-[var(--time-active-color,#555555)] dark:text-[var(--time-active-color,#d4d4d4)] font-medium w-full max-w-[200px]">
          {currentTimelineItem.time}
        </div>
      </div>

      <div
        style={{
          transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
          width: `${circleWidth}px`,
        }}
        className="absolute left-1/2 top-28 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out"
      >
        {data.map((line, lineIndex) => {
          return (
            <div key={`${lineIndex}`}>
              {line.steps.map((step, stepIndex) => {
                const angle =
                  angleBetweenMinorSteps *
                    (lineCountFillBetweenSteps + 1) *
                    (data
                      .slice(0, lineIndex)
                      .map((item) => item.steps.length)
                      .reduce((prev, current) => prev + current, 0) +
                      stepIndex) +
                  angleBetweenMinorSteps * boundaryPlaceholderLinesCount
                const isLastStep = lineIndex === data.length - 1 && stepIndex === line.steps.length - 1
                const isFirstStep = lineIndex === 0 && stepIndex === 0
                const isActive = Math.abs(angle + circleContainerRotateDeg) < 0.01
                return (
                  <div key={`${lineIndex}-${stepIndex}`}>
                    {isFirstStep && (
                      <PlaceholderLines
                        isFirstStep={true}
                        isLastStep={false}
                        angle={angle}
                        angleBetweenMinorSteps={angleBetweenMinorSteps}
                        lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                        boundaryPlaceholderLinesCount={boundaryPlaceholderLinesCount}
                        lineIndex={lineIndex}
                        stepIndex={stepIndex}
                        circleWidth={circleWidth}
                        circleContainerRotateDeg={circleContainerRotateDeg}
                      />
                    )}
                    <div
                      className={cn(
                        "absolute left-1/2 top-0 -translate-x-1/2 cursor-pointer transition-all duration-200 group",
                        isActive ? "h-[120px] w-[5px]" : "h-16 w-[5px]",
                        "hover:scale-110 hover:shadow-lg",
                      )}
                      style={{
                        transformOrigin: `50% ${circleWidth / 2}px`,
                        transform: `rotate(${angle}deg)`,
                      }}
                      onClick={() => {
                        let globalStepIndex = 0
                        for (let i = 0; i < lineIndex; i++) {
                          globalStepIndex += data[i].steps.length
                        }
                        globalStepIndex += stepIndex

                        setCircleContainerRotateDeg(-1 * angle)
                        setCurrentGlobalStepIndex(globalStepIndex)
                      }}
                    >
                      <div
                        className={cn(
                          "h-full w-full transition-all duration-200",
                          isActive
                            ? "bg-[var(--step-line-active-color,#888888)] dark:bg-[#00df9a] group-hover:bg-[var(--step-line-active-color,#666666)] dark:group-hover:bg-[#00df9a]"
                            : "bg-[var(--step-line-inactive-color,#b1b1b1)] dark:bg-[var(--step-line-inactive-color,#737373)] group-hover:bg-[var(--step-line-inactive-color,#888888)] dark:group-hover:bg-[#00df9a]",
                          "group-hover:shadow-[0_0_10px_rgba(151,128,255,0.5)] dark:group-hover:shadow-[0_0_10px_rgba(151,128,255,0.7)]",
                        )}
                        style={{
                          transformOrigin: "center top",
                          transform: `rotate(${-1 * angle - circleContainerRotateDeg}deg)`,
                        }}
                      >
                        <div
                          className={cn(
                            "absolute bottom-0 left-1/2 aspect-square -translate-x-1/2 transition-all duration-200",
                            isActive
                              ? "translate-y-[calc(100%_+_14px)] scale-[1.2] text-[var(--icon-active-color,#555555)] dark:text-[var(--icon-active-color,#d4d4d4)]"
                              : "translate-y-[calc(100%_+_4px)] scale-100 text-[var(--icon-inactive-color,#a3a3a3)] dark:text-[var(--icon-inactive-color,#a3a3a3)]",
                            "group-hover:scale-125 group-hover:text-[var(--icon-active-color,#555555)] dark:group-hover:text-[var(--icon-active-color,#d4d4d4)]",
                          )}
                        >
                          {step.icon}
                        </div>
                        <p
                          className={cn(
                            "absolute bottom-0 left-1/2 line-clamp-3 flex w-[240px] -translate-x-1/2 translate-y-[calc(100%_+_42px)] items-center justify-center text-center text-sm transition-opacity duration-300 ease-in",
                            "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm",
                            "text-[var(--description-color,#555555)] dark:text-[var(--description-color,#d4d4d4)]",
                            isActive ? "opacity-100" : "opacity-0",
                          )}
                        >
                          {step.content}
                        </p>
                      </div>
                    </div>

                    <PlaceholderLines
                      isFirstStep={false}
                      isLastStep={isLastStep}
                      angle={angle}
                      angleBetweenMinorSteps={angleBetweenMinorSteps}
                      lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                      boundaryPlaceholderLinesCount={boundaryPlaceholderLinesCount}
                      lineIndex={lineIndex}
                      stepIndex={stepIndex}
                      circleWidth={circleWidth}
                      circleContainerRotateDeg={circleContainerRotateDeg}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface PlaceholderLinesProps {
  isFirstStep: boolean
  angleBetweenMinorSteps: number
  angle: number
  lineCountFillBetweenSteps: number
  boundaryPlaceholderLinesCount: number
  isLastStep: boolean
  lineIndex: number
  stepIndex: number
  circleWidth: number
  circleContainerRotateDeg: number
}
function PlaceholderLines(props: PlaceholderLinesProps) {
  const {
    isFirstStep,
    isLastStep,
    angle,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
    lineIndex,
    stepIndex,
    circleWidth,
    circleContainerRotateDeg,
  } = props

  const getAngle = (index: number) => {
    if (isFirstStep) {
      return index * angleBetweenMinorSteps
    } else {
      return angle + (index + 1) * angleBetweenMinorSteps
    }
  }

  return (
    <>
      {Array(isLastStep || isFirstStep ? boundaryPlaceholderLinesCount : lineCountFillBetweenSteps)
        .fill("")
        .map((_, fillIndex) => {
          const fillAngle = getAngle(fillIndex)
          return (
            <div
              key={`${lineIndex}-${stepIndex}-${fillIndex}`}
              className="absolute left-1/2 top-0 h-[34px] w-[1px] -translate-x-1/2"
              style={{
                transformOrigin: `50% ${circleWidth / 2}px`,
                transform: `rotate(${fillAngle}deg)`,
              }}
            >
              <div
                className="h-full w-full bg-[var(--placeholder-line-color,#a1a1a1)] dark:bg-[var(--placeholder-line-color,#737373)]"
                style={{
                  transformOrigin: "center top",
                  transform: `rotate(${-1 * fillAngle - circleContainerRotateDeg}deg)`,
                }}
              ></div>
            </div>
          )
        })}
    </>
  )
}
