import React, {useState} from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      // Formspree的终点
      const endpoint = "https://formspree.io/f/xjvnooaz";
  
      const formData = {
        name: name,
        email: email,
        message: message,
      };
  
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (response.ok) {
            alert("消息已发送！");
            // 可选，这里可以重置表单字段
            setName("");
            setEmail("");
            setMessage("");
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                alert(data["errors"].map(error => error["message"]).join(", "));
              } else {
                alert("提交表单时出现问题！");
              }
            });
          }
        })

        .catch(error => {
          alert("提交表单时出现问题！");
        });
    }

      return (
        <section id="contact" className="relative">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=Auckland+CBD,+Auckland,+New+Zealand&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    LOCATION
                  </h2>
                  <p className="mt-1">
                    Auckland CBD. <br />
                    Auckland 1010
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed">
                    zeqiyin@aol.com
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">02 113344 06</p>
                </div>
              </div>
            </div>
            <form
              netlify
              name="contact"
              onSubmit={handleSubmit}
              className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Contact Me
              </h2>
              <p className="leading-relaxed mb-5">
              You can get in touch with me by filling out the form or sending an email directly. 
              I am happy to hear your feedback, suggestions, or collaboration proposals.
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </form>
          </div>
        </section>
      );
}