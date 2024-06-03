import React from "react";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { ReactComponent as Confirmed } from "../img/confirmed.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import { IoLocationSharp } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Success(props) {
    const [days, setDays] = useState([]);
    const[formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    
    const today = new Date();
    const map = [];

    for (let i = 0; i < 10; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const dayNumber = currentDate.getDate();
      const dayName = daysOfWeek[currentDate.getDay()];
      map.push({ Day: dayNumber, Name: dayName });
    }

    setDays(map);
  }, []);

  useEffect(() => {
    if (days.length === 0) return;
    const day = props.day;
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
      ];
    const currentMonthName = monthNames[currentMonth - 1];
    setFormattedDate(days[day].Name + ", " + currentMonthName + " " + days[day].Day + " 2024");
  }, [days]);

  return (
    <div
      className="flex flex-col items-center pt-12 w-full"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <h1 className="font-barlow-black uppercase mb-12">
        appointment successfully booked
      </h1>
      <div className="w-1/2 font-work-sans flex flex-col bg-white rounded-lg p-4">
        <div className="font-bold text-2xl">
          {formattedDate} at {props.time}
        </div>
        <Confirmed className="w-28 mb-4" />
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Logo className="border rounded-xl" />
            <div className="flex flex-col gap-2">
              <div className="font-bold">Vintage Shears Barbershop</div>
              <div>550 Cumberland St, Ottawa</div>
              <div>Booking ref. #: 22</div>
            </div>
          </div>
          <div className="w-1/2 flex justify-around justify-center">
            <div className="flex flex-col justify-center items-center">
              <OverlayTrigger
                overlay={
                  <Tooltip>
                    Feature not implemented <strong>yet</strong> 😅
                  </Tooltip>
                }
              >
                <div className="bg-gray-100 rounded-lg p-4 cursor-pointer">
                  <IoLocationSharp className="text-3xl" />
                </div>
              </OverlayTrigger>
              <p className="text-sm">Directions</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <OverlayTrigger
                overlay={
                  <Tooltip>
                    Feature not implemented <strong>yet</strong> 😅
                  </Tooltip>
                }
              >
              <div className="bg-gray-100 rounded-lg p-4 cursor-pointer">
                <RiCalendarScheduleFill className="text-3xl" />
              </div>
              </OverlayTrigger>
              <p className="text-sm">Reschedule</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <OverlayTrigger
                overlay={
                  <Tooltip>
                    Feature not implemented <strong>yet</strong> 😅
                  </Tooltip>
                }
              >
              <div className="bg-gray-100 rounded-lg p-4 cursor-pointer">
                <MdCancel className="text-3xl" />
              </div>
              </OverlayTrigger>
              <p className="text-sm">Cancel</p>
            </div>
          </div>
        </div>
        <div className="mt-2 border border-2 bg-white flex flex-col rounded-xl p-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h4 className="font-semibold">{props.service} with {props.barber}</h4>
              <p>1h</p>
            </div>
            <div>
              <p className="text-lg">$32</p>
            </div>
          </div>
          <div className="bg-gray-200 w-full h-1 rounded-lg my-6"></div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-semibold text-gray-400">Taxes</p>
              <h4 className="font-semibold">Total</h4>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold text-gray-400">13%</p>
              <h4 className="font-semibold">$36.16</h4>
            </div>
          </div>
        </div>

        <h5 className="text-lg font-semibold mt-4">Cancellation policy</h5>
        <p>
          Cancel for free anytime in advance, otherwise you will be charged{" "}
          <strong>100% </strong>
          of the service price for not showing up.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
