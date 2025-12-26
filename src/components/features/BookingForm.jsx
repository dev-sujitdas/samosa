import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const BookingForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    players: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);

    // Later:
    // fetch("/api/bookings", { method: "POST", body: JSON.stringify(formData) })

    alert("Booking request submitted!");
    setFormData({
      name: "",
      email: "",
      players: "",
      date: "",
      time: "",
      notes: ""
    });
  };

  return (
    <section className='fixed top-0  w-full h-dvh flex justify-center items-center z-999 bg-[#31303054] backdrop-blur-md '>
      {/* <button onClick={closeForm} className='rounded-full p-2 bg-white text-black font-bold absolute -right-3 -top-4 text-xl shadow-lg hover:scale-105 cursor-pointer'><IoClose /></button> */}
      {/* <div className='w-fit h-fit flex flex-col justify-center items-center relative'>
      <button onClick={closeForm} className='rounded-full p-2 bg-white text-black font-bold absolute -right-3 -top-4 text-xl shadow-lg hover:scale-105 cursor-pointer'><IoClose /></button>
        <form
          onSubmit={handleSubmit}
          className="w-lg mx-auto p-6 color-secondry shadow-md rounded-xl space-y-4 "
        >
          <h2 className="text-2xl poppins-bold text-center">Book a Table</h2>
          <div>
            <label className="block mb-1 poppins-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 focus:outline-zinc-400 focus:outline-[1px]  rounded-lg bg-amber-50"
            />
          </div>

          <div>
            <label className="block mb-1 poppins-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 focus:outline-zinc-400 focus:outline-[1px]  rounded-lg bg-amber-50"
            />
          </div>

          <div>
            <label className="block mb-1 poppins-medium">Number of Players</label>
            <input
              type="number"
              name="players"
              required
              min="1"
              max="12"
              placeholder="2"
              value={formData.players}
              onChange={handleChange}
              className="w-full p-2 focus:outline-zinc-400 focus:outline-[1px] rounded-lg bg-amber-50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 poppins-medium">Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 focus:outline-zinc-400 focus:outline-[1px] rounded-lg bg-amber-50 "
              />
            </div>

            <div>
              <label className="block mb-1 poppins-medium">Time</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 focus:outline-zinc-400 focus:outline-[1px]  rounded-lg bg-amber-50"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 poppins-medium">Notes</label>
            <textarea
              name="notes"
              rows="3"
              placeholder="Any special requests..."
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-2 focus:outline-zinc-400 focus:outline-[1px]  rounded-lg bg-amber-50"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full color-primary poppins-semibold text-white py-2 rounded-full hover:opacity-90 transition cursor-pointer"
          >
            Submit Booking
          </button>
        </form>
      </div> */}

      <div className='w-full h-full flex flex-col justify-center items-center relative'>
        <button onClick={closeForm} className='rounded-full p-2 bg-white text-black font-bold absolute right-3 top-2 text-xl shadow-lg hover:scale-105 cursor-pointer'><IoClose /></button>
        <iframe
          src="https://samosa.odoo.com/book/book-a-table"
          style={{ width: '100%', height: '100vh', border: 0 }}
        />
      </div>


    </section>
  )
}

export default BookingForm