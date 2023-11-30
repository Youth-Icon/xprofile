"use client";
import React, { useEffect, useState } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import Graph from "./Graph";
import { ArrowRight } from "lucide-react";
import Round from "@/app/(landing)/components/round";
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage.external";

interface ProfileView {
  viewerId: number;
  viewedId: number;
  timestamp: Date;
}

interface ProjectAnalyticsProps {
  selectedTimePeriod: string;
}

const ProjectAnalytics: React.FC<ProjectAnalyticsProps> = ({
  selectedTimePeriod,
}) => {
  // Placeholder data
  const profileViews: ProfileView[] = [
    { viewerId: 1, viewedId: 2, timestamp: new Date() },
    {
      viewerId: 2,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      viewerId: 3,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      viewerId: 4,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 3)),
    },
    {
      viewerId: 5,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 4)),
    },
    {
      viewerId: 6,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 5)),
    },
    {
      viewerId: 7,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 6)),
    },
    {
      viewerId: 2,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      viewerId: 3,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      viewerId: 4,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 3)),
    },
    {
      viewerId: 5,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 4)),
    },
    {
      viewerId: 6,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 5)),
    },
    {
      viewerId: 7,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 6)),
    },
    {
      viewerId: 8,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 7)),
    },
    {
      viewerId: 9,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 8)),
    },
    { viewerId: 1, viewedId: 2, timestamp: new Date() },
    {
      viewerId: 2,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      viewerId: 3,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      viewerId: 4,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 3)),
    },
    {
      viewerId: 5,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 4)),
    },
    {
      viewerId: 6,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 5)),
    },
    {
      viewerId: 7,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 6)),
    },
    {
      viewerId: 2,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      viewerId: 3,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      viewerId: 4,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 3)),
    },
    {
      viewerId: 5,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 4)),
    },
    {
      viewerId: 6,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 5)),
    },
    {
      viewerId: 7,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 6)),
    },
    {
      viewerId: 8,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 7)),
    },
    {
      viewerId: 9,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 8)),
    },
    {
      viewerId: 10,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 9)),
    },
    {
      viewerId: 11,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 10)),
    },
    {
      viewerId: 12,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 11)),
    },
    {
      viewerId: 13,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 12)),
    },
    {
      viewerId: 14,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 13)),
    },
    {
      viewerId: 15,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 14)),
    },
    {
      viewerId: 16,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 15)),
    },
    {
      viewerId: 17,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 16)),
    },
    {
      viewerId: 18,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 17)),
    },
    {
      viewerId: 19,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 18)),
    },
    {
      viewerId: 20,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 19)),
    },
    {
      viewerId: 14,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 13)),
    },
    {
      viewerId: 15,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 14)),
    },
    {
      viewerId: 16,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 15)),
    },
    {
      viewerId: 17,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 16)),
    },
    {
      viewerId: 18,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 17)),
    },
    {
      viewerId: 19,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 18)),
    },
    {
      viewerId: 20,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 19)),
    },
    {
      viewerId: 14,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 13)),
    },
    {
      viewerId: 15,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 14)),
    },
    {
      viewerId: 16,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 15)),
    },
    {
      viewerId: 17,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 17)),
    },
    {
      viewerId: 17,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 16)),
    },
    {
      viewerId: 17,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 16)),
    },
    {
      viewerId: 18,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 17)),
    },
    {
      viewerId: 19,
      viewedId: 1,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 18)),
    },
    {
      viewerId: 20,
      viewedId: 2,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 19)),
    },
    { viewerId: 17, viewedId: 1, timestamp: new Date("2023-10-31T12:00:00Z") },
  ];

  

  // State to store the selected time period data
  const [selectedData, setSelectedData] = useState<{
    data: number[];
    labels: string[];
  }>({
    data: [],
    labels: [],
  });

  const [activeTimePeriod, setActiveTimePeriod] = useState("thisWeek");
  

  const handleTimePeriodChange = (selectedTime: string) => {
   
    setSelectedData(getDataForTimePeriod(selectedTime));
    setActiveTimePeriod(selectedTime);
  };

  const getDataForTimePeriod = (timePeriod: string) => {
    switch (timePeriod) {
      case "thisWeek":
        return { data: getThisWeekData(), labels: generateWeekLabels() };
      case "lastWeek":
        return { data: getLastWeekData(), labels: generateWeekLabels() };
      case "lastMonth":
        return { data: getLastMonthData(), labels: generateLastMonthLabels() };
      case "last3Months":
        return {
          data: getLast3MonthsData(),
          labels: generateLast3MonthsLabels(),
        };

      case "last6Months":
        return {
          data: getLast6MonthsData(),
          labels: generateLast6MonthsLabels(),
        };
      default:
        return { data: [], labels: [] };
    }
  };

  useEffect(() => {
    // Initialize the selected data based on the initial time period
    setSelectedData(getDataForTimePeriod(selectedTimePeriod));
  }, [selectedTimePeriod]);

  // Helper function to filter views by time period
  const filterViewsByTimePeriod = (
    views: ProfileView[],
    timePeriod: string
  ): ProfileView[] => {
    const currentDate = new Date();
    let startDate: Date;
    let endDate: Date;

    switch (timePeriod) {
      case "thisWeek":
        // Set the start date to the first second of the first day of the current week
        startDate = new Date(
          currentDate.getTime() -
            (currentDate.getDay() - 1) * 24 * 60 * 60 * 1000
        );
        startDate.setHours(0, 0, 0, 0);

        // Set the end date to the last second of the last day of the current week
        endDate = new Date(
          currentDate.getTime() +
            (7 - currentDate.getDay()) * 24 * 60 * 60 * 1000
        );
        endDate.setHours(23, 59, 59, 999);
        break;

      case "lastWeek":
        // Set the start date to the first second of the first day of the last week
        startDate = new Date(
          currentDate.getTime() -
            (currentDate.getDay() + 6) * 24 * 60 * 60 * 1000
        );
        startDate.setHours(0, 0, 0, 0);

        // Set the end date to the last second of the last day of the last week
        endDate = new Date(
          currentDate.getTime() - currentDate.getDay() * 24 * 60 * 60 * 1000
        );
        endDate.setHours(23, 59, 59, 999);
        break;

      case "lastMonth":
        // Set the start date to the first second of the first day of the last month
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        );
        startDate.setHours(0, 0, 0, 0);

        // Set the end date to the last second of the last day of the last month
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0,
          23,
          59,
          59,
          999
        );
        break;

      case "last3Months":
        // Set the start date to the first second of the first day of 2 months ago
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 2,
          1
        );
        startDate.setHours(0, 0, 0, 0);

        // Set the end date to the last second of the last day of the current month
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0,
          23,
          59,
          59,
          999
        );

        break;

      case "last6Months":
        // Set the start date to the first second of the first day of 6 months ago
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 5,
          1
        );
        startDate.setHours(0, 0, 0, 0);

        // Set the end date to the last second of the last day of the current month
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0,
          23,
          59,
          59,
          999
        );
        break;

      default:
        return views;
    }

    return views.filter(
      (view) => view.timestamp >= startDate && view.timestamp <= endDate
    );
  };

  const getThisWeekData = () => {
    const thisWeekViews = filterViewsByTimePeriod(profileViews, "thisWeek");
    const viewsPerDay = countViewsPerDay(thisWeekViews);
    return generateWeekLabels().map((day) => viewsPerDay[day] || 0);
  };

  // Helper function to get data for "Last Week"
  const getLastWeekData = () => {
    const lastWeekViews = filterViewsByTimePeriod(profileViews, "lastWeek");
    const viewsPerDay = countViewsPerDay(lastWeekViews);
    return generateWeekLabels().map((day) => viewsPerDay[day] || 0);
  };

  // Helper function to get data for "Last Month"
  const getLastMonthData = () => {
    const lastMonthViews = filterViewsByTimePeriod(profileViews, "lastMonth");
    const viewsPerDay = countViewsPerDayNumber(lastMonthViews);

    return generateLastMonthLabels().map((day) => viewsPerDay[day] || 0);
  };

  const getLast3MonthsData = () => {
    const last3MonthsViews = filterViewsByTimePeriod(
      profileViews,
      "last3Months"
    );
    const viewsPerMonth = countViewsPerMonth(last3MonthsViews, 3);
    return generateLast3MonthsLabels().map(
      (month) => viewsPerMonth[month] || 0
    );
  };

  const getLast6MonthsData = () => {
    const last6MonthsViews = filterViewsByTimePeriod(
      profileViews,
      "last6Months"
    );
    const viewsPerMonth = countViewsPerMonth(last6MonthsViews, 6);
    return generateLast6MonthsLabels().map(
      (month) => viewsPerMonth[month] || 0
    );
  };

  const generateLastMonthLabels = (): string[] => {
    const currentDate = new Date();
    const lastMonthLabels: string[] = [];

    // Determine the number of days in the last month
    const lastMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    // Generate labels for each day in the last month
    for (let day = 1; day <= lastMonthDays; day++) {
      lastMonthLabels.push(day.toString());
    }

    return lastMonthLabels;
  };

  const generateLast3MonthsLabels = (): string[] => {
    const currentDate = new Date();
    const last3MonthsLabels: string[] = [];

    for (let i = 2; i >= 0; i--) {
      const lastMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );
      const monthName = lastMonthDate.toLocaleString("default", {
        month: "short",
      });

      last3MonthsLabels.push(monthName);
    }

    return last3MonthsLabels;
  };

  const generateLast6MonthsLabels = (): string[] => {
    const currentDate = new Date();
    const last6MonthsLabels: string[] = [];

    for (let i = 5; i >= 0; i--) {
      const lastMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );
      const monthName = lastMonthDate.toLocaleString("default", {
        month: "short",
      });

      last6MonthsLabels.push(monthName);
    }

    return last6MonthsLabels;
  };

  const countViewsPerDayNumber = (views: ProfileView[]) => {
    const viewsPerDay: Record<string, number> = {};
    views.forEach((view) => {
      // Use the day of the month as the key with two digits
      const day = view.timestamp.getDate().toString().padStart(2, "0");
      viewsPerDay[day] = (viewsPerDay[day] || 0) + 1;
    });
    return viewsPerDay;
  };

  // Helper function to count views per day
  const countViewsPerDay = (views: ProfileView[]) => {
    const viewsPerDay: Record<string, number> = {};
    views.forEach((view) => {
      const day = view.timestamp.toLocaleDateString("en-US", {
        weekday: "short",
      });
      viewsPerDay[day] = (viewsPerDay[day] || 0) + 1;
    });
    return viewsPerDay;
  };

  const countViewsPerMonth = (views: ProfileView[], months: number) => {
    const viewsPerMonth: Record<string, number> = {};

    for (let i = months - 1; i >= 0; i--) {
      const currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() - i);

      // Use the month as the key with a formatted string
      const key = currentDate.toLocaleString("default", { month: "short" });

      // Filter views for the current month
      const viewsForMonth = views.filter(
        (view) =>
          view.timestamp.getMonth() === currentDate.getMonth() &&
          view.timestamp.getFullYear() === currentDate.getFullYear()
      );

      // Count the number of views for the current month
      viewsPerMonth[key] = viewsForMonth.length;
    }

    return viewsPerMonth;
  };
  // Helper function to generate labels for the days of the week
  const generateWeekLabels = (): string[] => {
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return labels;
  };

  const getFormattedLabel = (period: string): string => {
    switch (period) {
      case "thisWeek":
        return "This Week";
      case "lastWeek":
        return "Last Week";
      case "lastMonth":
        return "Last Month";
      case "last3Months":
        return "Last 3 Months";
      case "last6Months":
        return "Last 6 Months";
      default:
        return "";
    }
  };
  const calculateSumForTimePeriod = (timePeriod: string): number => {
    const data = getDataForTimePeriod(timePeriod);
    return data.data.reduce((sum, count) => sum + count, 0);
  };

  return (
    <div className="h-[638px] mt-5 overflow-hidden relative">
      <Round className="absolute right-[9rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />
      <Round className="absolute -left-[4rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />

      <FeatureBox
        height="auto"
        width="auto"
        paddingX="32px"
      
        style={{ display: "flex", flexDirection: "column", paddingTop:"32px", paddingBottom:"20px" }}
      >
        <div className="flex justify-between">
          <div className="text-white text-2xl font-semibold font-manrope">
            Project Analytics
          </div>
          <div className="w-[193px] h-11 px-4 py-2.5 bg-orange-600 bg-opacity-10 rounded-lg backdrop-blur-[32px] justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-neutral-400 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-center text-orange-600 text-lg font-medium font-manrope leading-none">
              Manage Profile
            </div>
            <ArrowRight color="rgb(234 88 12)" />
          </div>
        </div>

        <div className="flex gap-[51px] items-center mt-[48px]">
          <div className="flex justify-between gap-5 items-center">
            <div className="text-white text-[20px] font-semibold font-manrope">
              See your profile views
            </div>
            <ArrowRight color="white" />
          </div>

          <div className="flex gap-[51px] overflow-scroll">
            {[
              "thisWeek",
              "lastWeek",
              "lastMonth",
              "last3Months",
              "last6Months",
            ].map((period) => (
              <FeatureBox
                key={period}
                height="142px"
                width="142px"
                paddingX="0"
                paddingY="0"
              >
                <div
                  className={`flex flex-col p-[24px] items-center justify-between w-full h-full rounded-3xl hover:bg-white/20 cursor-pointer transition-all duration-300 ${activeTimePeriod === period ? 'bg-white/20' : ''}`}
                  onClick={() => handleTimePeriodChange(period)}
                >
                  <div
                    className="text-center text-white text-[42px] font-bold font-manrope leading-normal "
                  >
                    {calculateSumForTimePeriod(period)}
                  </div>
                  <div className="text-center text-slate-300 text-opacity-60 text-[14px] font-semibold font-manrope leading-normal">
                    {getFormattedLabel(period)}
                  </div>
                </div>
              </FeatureBox>
            ))}
          </div>
        </div>
       {calculateSumForTimePeriod(activeTimePeriod) > 0 &&
        <div className="h-400px">
          <Graph data={selectedData.data} labels={selectedData.labels} />
        </div>}
        {calculateSumForTimePeriod(activeTimePeriod)==0 &&
        <div className="h-[350px] flex text-center items-center justify-center text-manrope text-5xl">
          No views in this selection
        </div>
        
        
        }

      </FeatureBox>
    </div>
  );
};

export default ProjectAnalytics;
