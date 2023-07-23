import { useState } from "react";
import { useParams } from "react-router-dom";
import useColleges from "../../Components/useColleges";
const img_hosting_token = import.meta.env.VITE_imgbb;

const AdmissionForm = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { id } = useParams();
  const [colleges] = useColleges();

  const getCollege = colleges.find((college) => college?._id == id);

  const handleImage = async (data) => {
    const formData = new FormData();
    formData.append("image", data);

    try {
      const res = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imgResponse = await res.json();
      return imgResponse.data.url;
    } catch (error) {
      return {};
    }
  };

  const [form, setForm] = useState({
    collegeId: null,
    collegeName: "",
    candidateName: "",
    subject: "",
    candidateEmail: "",
    candidatePhone: "",
    address: "",
    dob: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = async (e) => {
    const imgResponse = await handleImage(e.target.files[0]);
    setForm({ ...form, image: imgResponse });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.collegeId = getCollege._id
    form.collegeName = getCollege.collegeName;
    console.log(form);
  };

  return (
    <div className="flex justify-center items-center  my-16">
      <form
        onSubmit={handleSubmit}
        className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2"
      >
        <div className="flex justify-center py-4"></div>

        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
              Admission Form
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            College Name
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            name="collegeName"
            value={getCollege?.collegeName}
            onChange={handleChange}
            readOnly
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Candidate Name
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            name="candidateName"
            value={form.candidateName}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Subject
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Candidate Email
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="email"
            name="candidateEmail"
            value={form.candidateEmail}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Candidate Phone Number
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="tel"
            name="candidatePhone"
            value={form.candidatePhone}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Address
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Date of Birth
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Image
          </label>
          <input
            className="mt-1"
            type="file"
            name="image"
            onChange={handleImageChange}
          />
        </div>

        <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
          <button
            className="btn bg-main text-white normal-case font-semibold hover:text-gray-500 hover:border-main"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
