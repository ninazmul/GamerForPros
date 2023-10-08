
const Contact = () => {
    return (
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-3xl text-center text-pink-500 font-bold p-4">
          Contact with Us:
        </h1>
        <div>
          <h2>
            <span className="font-bold text-pink-500 pr-2"> Website:</span>
            www.FakeWebsite.com
          </h2>
          <h2 className="font-bold text-pink-500 pr-2">
            {" "}
            Contact Information:
          </h2>
          <h2>
            <span className="font-bold text-pink-500 pr-2">
              {" "}
              Customer Support Email:
            </span>
            support@fakewebsite.com
          </h2>
          <h2>
            <span className="font-bold text-pink-500 pr-2">Phone Number:</span>
            (555) 123-4567
          </h2>
          <h2>
            <span className="font-bold text-pink-500 pr-2">
              {" "}
              Mailing Address:
            </span>
            1234 Fictional Street Imaginary City, State 98765 United States
          </h2>
          <p>
            Please keep in mind that this is entirely fictional and should not
            be used for any real-world purposes. It's important to use accurate
            and truthful information for actual websites or businesses.
          </p>
        </div>
      </div>
    );
};

export default Contact;