import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import { FaChevronRight } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Success from "./Success";

function Appointment() {
  const [days, setDays] = useState([]);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState("book");
  const [selected, setSelected] = useState("Adult Haircut");
  const [selectedBarber, setSelectedBarber] = useState("Alec Landry");
  const [selectedTime, setSelectedTime] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const times = ["9:00am", "9:30am", "10:00am", "10:30am", "11:00am"];

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
      const dayName = daysOfWeek[currentDate.getDay()].slice(0, 3);
      map.push({ Day: dayNumber, Name: dayName });
    }

    setDays(map);
  }, []);

  const confirmAppointment = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    if (name === "" || email === "" || selectedSlot === 0) {
      setShow(true);
      return;
    }
    setPage("success");
  };

  const switchService = (index) => {
    setSelected(index);
  };

  const switchBarber = (index) => {
    setSelectedBarber(index);
  };

  const switchTime = (index) => {
    setSelectedTime(index);
  };

  const switchSlot = (index) => {
    switch (index) {
      case 0:
        setSelectedSlot("9:00am");
        break;
      case 1:
        setSelectedSlot("9:30am");
        break;
      case 2:
        setSelectedSlot("10:00am");
        break;
      case 3:
        setSelectedSlot("10:30am");
        break;
      case 4:
        setSelectedSlot("11:00am");
        break;
      default:
        setSelectedSlot("9:00am");
    }
  };
  if (page === "book") {
    return (
      <div
        className="flex flex-col items-center pt-12 w-full"
        style={{ backgroundColor: "#EFEFEF" }}
      >
        <Alert show={show} variant="success">
                <Alert.Heading>Booking could not be completed!</Alert.Heading>
                <p>
                  Oops! Looks like you missed some information. Please make sure to select a <strong>timeslot</strong>, and provide your <strong>name and email address</strong>.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={() => setShow(false)}
                    variant="outline-success"
                  >
                    Close me
                  </Button>
                </div>
              </Alert>
        <h1 className="font-barlow-black uppercase mb-12">
          book an appointment
        </h1>
        <div className="w-1/2 font-work-sans flex flex-col">
          <p className="-mb-1 text-xs">Step 1 of 3</p>
          <p className="text-2xl font-bold">Select service & barber</p>
          <div className="bg-white rounded-lg flex p-4 items-center justify-center text-center mb-4 gap-4">
            <div
              className={`w-1/4 p-2 cursor-pointer rounded-xl ${
                selected !== "Adult Haircut" ? "hover:bg-gray-200" : ""
              } ${selected === "Adult Haircut" ? "bg-purple-900 text-white" : ""}`}
              onClick={() => switchService("Adult Haircut")}
            >
              Adult Haircut
            </div>
            <div
              className={`w-1/4 p-2 cursor-pointer rounded-xl ${
                selected !== "Kid/Senior Haircut" ? "hover:bg-gray-200" : ""
              } ${selected === "Kid/Senior Haircut" ? "bg-purple-900 text-white" : ""}`}
              onClick={() => switchService("Kid/Senior Haircut")}
            >
              Kid/Senior Haircut
            </div>
            <div
              className={`w-1/4 p-2 cursor-pointer rounded-xl ${
                selected !== "Student Haircut" ? "hover:bg-gray-200" : ""
              } ${selected === "Student Haircut" ? "bg-purple-900 text-white" : ""}`}
              onClick={() => switchService("Student Haircut")}
            >
              Student Haircut
            </div>
            <div
              className={`w-1/4 p-2 cursor-pointer rounded-xl ${
                selected !== "Haircut + Beard Trim" ? "hover:bg-gray-200" : ""
              } ${selected === "Haircut + Beard Trim" ? "bg-purple-900 text-white" : ""}`}
              onClick={() => switchService("Haircut + Beard Trim")}
            >
              Haircut + Beard Trim
            </div>
          </div>
          <div className="bg-white rounded-lg flex p-4 items-center justify-center text-center mb-4 gap-4">
            <div
              className={`w-1/4 p-2 cursor-pointer rounded-xl ${
                selectedBarber !== "Alec Landry" ? "hover:bg-gray-200" : ""
              } ${selectedBarber === "Alec Landry" ? "bg-purple-900 text-white" : ""}`}
              onClick={() => switchBarber("Alec Landry")}
            >
              Alec Landry
            </div>
            <div
              className={`w-1/4 p-2 cursor-pointer rounded-xl ${
                selectedBarber !== "Edwin Jett" ? "hover:bg-gray-200" : ""
              } ${selectedBarber === "Edwin Jett" ? "bg-purple-900 text-white" : ""}`}
              onClick={() => switchBarber("Edwin Jett")}
            >
              Edwin Jett
            </div>
            <div
              className={`w-1/4 p-2 cursor-pointer rounded-xl ${
                selectedBarber !== "Layla Nesim" ? "hover:bg-gray-200" : ""
              } ${selectedBarber === "Layla Nesim" ? "bg-purple-900 text-white" : ""}`}
              onClick={() => switchBarber("Layla Nesim")}
            >
              Layla Nesim
            </div>
            <div
              className={`w-1/4 p-2 cursor-pointer rounded-xl ${
                selectedBarber !== "Any Barber" ? "hover:bg-gray-200" : ""
              } ${selectedBarber === "Any Barber" ? "bg-purple-900 text-white" : ""}`}
              onClick={() => switchBarber("Any Barber")}
            >
              Any Barber
            </div>
          </div>
          <p className="-mb-1 text-xs">Step 2 of 3</p>
          <p className="text-2xl font-bold">Select time</p>
          <div className="bg-white flex flex-col justify-center rounded-lg">
            <div className="flex gap-2 justify-around p-4">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border border-gray-400 rounded-lg px-4 py-2 text-center flex flex-col ${
                    selectedTime === index ? "bg-yellow-500 text-white" : ""
                  }`}
                  onClick={() => switchTime(index)}
                >
                  <div>{day.Name}</div>
                  <div>{day.Day}</div>
                </div>
              ))}
            </div>
            <div className="">
              {times.map((time, index) => (
                <div
                  className="border-b-2 border-gray-200 p-4 font-semibold text-xl flex justify-between cursor-pointer hover:bg-gray-100"
                  key={index}
                  onClick={() => switchSlot(index)}
                >
                  <div>{time}</div>
                  <div>
                    <FaChevronRight />
                  </div>
                </div>
              ))}
              {selectedSlot !== 0 ? (
                <p className="text-center mt-4 text-gray-400">
                  Selected time: {selectedSlot}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <p className="-mb-1  mt-4 text-xs">Step 3 of 3</p>
          <p className="text-2xl font-bold">Input information</p>
          <div className="bg-white flex justify-around p-4 items-center rounded-lg">
            <div className="w-1/3">
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                onChange={(e) => setName(e.target.value)}
              >
                <Form.Control type="text" placeholder="John Doe" />
              </FloatingLabel>
            </div>
            <div className="w-1/3">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </div>
            <div>
              <Button
                variant="primary"
                className=" text-center flexitems-center font-barlow-button uppercase text-white p-3 px-4"
                onClick={() => confirmAppointment()}
                style={{
                  backgroundColor: "#515253",
                  borderRadius: 0,
                  color: "#000",
                  fontSize: "16px",
                  border: "none",
                }}
              >
                book now
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  } else {
    return <Success day={selectedTime} time={selectedSlot} barber={selectedBarber} service={selected}/>;
  }
}

export default Appointment;
