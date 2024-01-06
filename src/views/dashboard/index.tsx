import classNames from "classnames";
import Export from "../../assets/svg/export.svg";
import Reality from "../../assets/svg/reality.svg";
import Target from "../../assets/svg/target.svg";
import { CustomChart } from "../../components/chart";
import Typography from "../../components/typography";
import { DashboardCard, Products } from "../../helper/keyConstants";

const Dashboard = () => {
  const colors = ["#FFE2E5", "#FFF4DE", "#DCFCE7", "#F3E8FF"];
  const borderColors = ["#fff", "#0095FF", "00E58F", "#884DFF", "#FF8900"];
  const backgroundColors = ["#fff", "#CDE7FF", "#8CFAC7", "#C5A8FF", "#FFD5A4"];
  const textColors = ["#000", "#0095FF", "00E58F", "#884DFF", "#FF8900"];

  const updatedCards = DashboardCard.map((card) => {
    switch (card.id) {
      case 1:
        return { ...card };

      default:
        return card;
    }
  });

  const lineSeries = [
    {
      name: "New Customers",
      data: [250, 240, 180, 150, 190, 230, 330, 350, 310, 280, 170, 120],
    },

    {
      name: "Loyal Customers",
      data: [320, 310, 270, 220, 200, 220, 280, 350, 320, 280, 180, 140],
    },

    {
      name: "Unique Customers",
      data: [280, 330, 320, 270, 180, 280, 300, 350, 320, 270, 170, 130],
    },
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const series = [
    {
      name: "Online Sales",
      data: [12, 15, 20, 10, 15, 25, 30],
    },

    {
      name: "Offline Sales",
      data: [11, 10, 10, 20, 20, 20, 20],
    },
  ];
  const halfMonths = ["Jan", "Feb", "Mar", "April", "May", "June", "July"];

  const areaSeries = [
    {
      name: "Last Month",
      data: [250, 240, 180, 150, 190, 230, 330],
    },

    {
      name: "This Month",
      data: [320, 310, 270, 220, 200, 220, 280],
    },
  ];

  const columnSeries = [
    {
      name: "Volume",
      data: [700, 550, 600, 500, 450, 850, 500],
    },

    {
      name: "Services",
      data: [410, 400, 700, 700, 400, 700, 400],
    },
  ];
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white px-5 pt-5 rounded-lg shadow-sm col-span-3 xl:col-span-2">
            <div className="flex justify-between items-center mb-3">
              <Typography
                type="p"
                children="Today's Sales"
                weight="medium"
                variant="textMd"
              />
              <div className="flex items-center gap-1 border-[2px] border-gray-100 px-3 py-1 rounded-lg">
                <img src={Export} alt="export" className="w-4" />
                <Typography
                  type="p"
                  children="Export"
                  className="!text-[10px]"
                />
              </div>
            </div>
            <Typography
              type="p"
              children="Sales Summary"
              className="text-primary"
            />

            <div className="mt-8 pb-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-stretch justify-between gap-4">
              {updatedCards.map((item, i) => (
                <div
                  className={classNames(
                    `flex flex-col items-start p-6 bg-white w-full cursor-pointer hover:scale-105 `,
                    "rounded-xl border border-gray-100 space-y-4 ease-in-out shadow-sm"
                  )}
                  key={`dashboardCard${i}`}
                  style={{ backgroundColor: colors[i] }}
                >
                  <img src={item.image} alt="image" className="w-8" />
                  <Typography
                    type="p"
                    className="!text-lg "
                    title={item.amount?.toString()}
                    weight="semi-bold"
                  >
                    {item.amount}
                  </Typography>
                  <Typography type="p" weight="medium" className="">
                    {item.title}
                  </Typography>
                  <Typography
                    type="p"
                    className="lg:!text-[10px] !text-[#4079ED] "
                  >
                    {item.percentage}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white px-5 pt-3 rounded-lg shadow-sm col-span-3 lg:col-span-4 xl:col-span-1">
            <Typography type="p" children="Visitor Insight" weight="medium" />
            <CustomChart
              id="line-chart"
              type="line"
              colors={["#A700FF", "#EF4444", "#3CD856"]}
              series={lineSeries}
              categories={months}
              curve="smooth"
              showDownloads
              yAxisLabel
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-5">
          <div className="bg-white px-5 pt-3 rounded-lg shadow-sm col-span-4 lg:col-span-2">
            <Typography
              type="p"
              children="Total Revenue"
              weight="medium"
              variant="textMd"
            />

            <div>
              <CustomChart
                id="chart"
                type="bar"
                colors={["#0095FF", "#00E096"]}
                series={series}
                categories={[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ]}
                yAxisLabel
                label={[]}
              />
            </div>
          </div>
          <div className="bg-white px-5 pt-3 rounded-lg shadow-sm col-span-4 lg:col-span-2">
            <div>
              <div>
                <Typography
                  type="p"
                  children="Customer Satisfaction"
                  weight="medium"
                  variant="textMd"
                />
              </div>
              <CustomChart
                id="area-chart"
                type="area"
                colors={["#07E098", "#0095FF"]}
                series={areaSeries}
                categories={months}
                curve="smooth"
                xaxisLabel={false}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-5">
          <div className="bg-white px-5 pt-3 rounded-lg shadow-sm col-span-4 lg:col-span-2">
            <Typography
              type="p"
              children="Top Products"
              weight="medium"
              variant="textMd"
            />

            <div className="flex gap-4 flex-col">
              {Products?.map((item, index) => {
                return (
                  <div
                    className="flex items-center justify-between border-b-2 border-gray-100 pb-4 pt-6 text-xs md:text-sm"
                    key={index}
                  >
                    <Typography
                      type="p"
                      children={item.index}
                      className="!text-xs md:text-sm"
                    />
                    <Typography
                      type="p"
                      children={item.title}
                      className="!text-xs md:text-sm"
                    />
                    <div>
                      <div className="w-[10%]"> {item.popularity}</div>
                    </div>
                    <div
                      className={`${
                        item.sales === "Sales" ? "" : "rounded-lg"
                      } text-sm px-4 py-1`}
                      style={{
                        backgroundColor: backgroundColors[index],
                        border: `1px solid ${borderColors[index]}`,
                        color: `${textColors[index]}`,
                      }}
                    >
                      {item.sales}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white px-5 pt-3 rounded-lg shadow-sm col-span-4 lg:col-span-2 pb-5">
            <Typography
              type="p"
              children="Target Vs Reality"
              weight="medium"
              variant="textMd"
            />

            <div>
              <CustomChart
                id="chart"
                type="bar"
                colors={["#4AB58E", "#FFCF00"]}
                series={series}
                categories={halfMonths}
                label={[]}
                xaxisLabel={false}
              />

              <div className="mt-5 w-1/2 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={Target} alt="reality" />
                    <div>
                      <Typography
                        type="p"
                        children="Reality Sales"
                        weight="medium"
                      />
                      <Typography
                        type="p"
                        children="Global"
                        className="text-primary"
                      />
                    </div>
                  </div>
                  <Typography
                    type="p"
                    children="8.823"
                    className="!text-[#27AE60]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={Reality} alt="reality" />
                    <div>
                      <Typography
                        type="p"
                        children="Target Sales"
                        weight="medium"
                      />
                      <Typography
                        type="p"
                        children="Commercial"
                        className="text-primary"
                      />
                    </div>
                  </div>
                  <Typography
                    type="p"
                    children="12.122"
                    className="!text-[#FFA412]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-5">
          <div className="bg-white px-5 pt-3 rounded-lg shadow-sm col-span-4 lg:col-span-2">
            <div>
              <div>
                <Typography
                  type="p"
                  children="Top Sales"
                  weight="medium"
                  variant="textMd"
                />
              </div>
              <CustomChart
                id="area-chart"
                type="area"
                colors={["#07E098", "#0095FF"]}
                series={areaSeries}
                categories={months}
                // curve=""
                xaxisLabel={false}
              />
            </div>
          </div>

          <div className="bg-white px-5 pt-3 rounded-lg shadow-sm col-span-4 lg:col-span-2">
            <Typography
              type="p"
              children="Volume Vs Service Level"
              variant="textMd"
              weight="medium"
            />

            <div>
              <CustomChart
                id="column-chart"
                type="bar"
                colors={["#0095FF", "#00E096"]}
                series={columnSeries}
                stacked
                categories={[]}
                label={[]}
                xaxisLabel={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
