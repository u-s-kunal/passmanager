import React from "react";
import { useRef, useState, useEffect } from "react";
import Table from "./Table";
import { toast, Bounce } from "react-toastify";

function Manager() {
  const ref = useRef();
  const redSiteRef = useRef();
  const redUserRef = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({
    site: "",
    user: "",
    password: "",
  });

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const eyeHandler = () => {
    if (ref.current.src.includes("/eye.png")) {
      passwordRef.current.type = "password";
      ref.current.src = "/Eye-close.svg";
    } else {
      passwordRef.current.type = "text";
      ref.current.src = "/eye.png";
    }
  };

  const deleteHandler = (index, value) => {
    for (let i = 0; i < passwordArray.length; i++) {
      if (i === index) {
        passwordArray.splice(index, 1);
        setPasswordArray([...passwordArray]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray]));
        if (value !== false)
          toast.warn("Data Deleted!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
      }
    }
    value = true;
  };

  const editHandler = (index) => {
    for (let i = 0; i < passwordArray.length; i++) {
      const element = passwordArray[i];
      if (i === index) {
        passwordArray.splice(index, 1);
        setPasswordArray([...passwordArray]);
        setForm({
          site: element.site,
          user: element.user,
          password: element.password,
        });
        toast.info(" Added for Editing !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
  };

  const saveFormHandler = () => {
    if (form.site != "" && form.password != "" && form.user != "") {
      setPasswordArray([...passwordArray, form]);
      toast.success("Data Saved!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, form])
      );
      setForm({ site: "", user: "", password: "" });
    } else {
      toast.error(" Data Missing..!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (form.site == "") {
      redSiteRef.current.className =
        "border-red-500 input text-black bg-amber-50 w-full  rounded-sm  p-3 border-2 ";
    } else {
      redSiteRef.current.className =
        "input text-black bg-amber-50 w-full  rounded-sm  p-3 border-2 ";
    }
    if (form.user == "") {
      redUserRef.current.className =
        "text-black border-red-500 bg-amber-50 w-full my-6 block  rounded-sm  p-3  border-2";
    } else {
      redUserRef.current.className =
        "text-black bg-amber-50 w-full my-6 block  rounded-sm  p-3  border-2";
    }
    if (form.password == "") {
      passwordRef.current.className =
        "text-black border-red-500 bg-amber-50 w-full  cursor-pointer    my-6  rounded-sm p-3  border-2";
    } else {
      passwordRef.current.className =
        "text-black bg-amber-50 w-full  cursor-pointer    my-6  rounded-sm p-3  border-2";
    }
  };

  return (
    <div className="">
      <div className="w-full absolute top-10">
        <div className="p-4 bg-slate-600  text-white  ">
          <div className="my-6">
            <h1 className="font-bold text-4xl p-3 text-center">
              {" "}
              &lt; Pass<span className="text-green-700  ">Manager</span>/&gt;
            </h1>
            <div>
              <p className="text-center  "> Our Own Password Manager</p>
            </div>
          </div>

          <div className="container mx-auto p-2 items-center">
            <input
              type="text"
              placeholder="Enter Website URL"
              name="site"
              onChange={handleChange}
              value={form.site}
              ref={redSiteRef}
              className="input text-black bg-amber-50 w-full  rounded-sm  p-3 border 

        "
            />
            <div className="  flex justify-between  gap-8 ">
              <input
                type="text"
                placeholder="Enter User Name"
                name="user"
                onChange={handleChange}
                value={form.user}
                ref={redUserRef}
                className=" text-black bg-amber-50 w-full my-6 block  rounded-sm  p-3"
              />
              <div className="relative w-full">
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                  placeholder="Enter Password"
                  className=" text-black bg-amber-50 w-full  cursor-pointer    my-6  rounded-sm p-3 "
                />
                <img
                  src="/Eye-close.svg"
                  ref={ref}
                  alt=""
                  srcSet=""
                  className="w-6  h-6  absolute top-[36%] right-[7%]"
                  onClick={eyeHandler}
                />
              </div>
            </div>
            <div className=" flex justify-center">
              <button
                onClick={saveFormHandler}
                className="  font-bold flex   hover:bg-amber-700 bg-green-800 p-3 rounded-md "
              >
                <lord-icon
                  src="https://cdn.lordicon.com/sbnjyzil.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                ></lord-icon>
                <div className=" text-center my-1 mx-1 ">SAVE DETAILS</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Table
        s
        passwordArray={passwordArray}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
}

export default Manager;
