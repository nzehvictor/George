import "./App.css";

function App() {
  return (
    <div>
      <header
        style={{
          background: "#19201D",
          display: "flex",
          justifyContent: "space-between",
          height: "96px",
        }}
      >
        <div style={{ padding: "31px 0px 31px 80px" }}>
          <img src="/images/logo.svg" alt="header-img" />
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            padding: "38px 80px 38px 0px",
          }}
        >
          <p
            style={{
              paddingRight: "203px",
              fontSize: "16px",
              fontWeight: 450,
            }}
          >
            Contact us
          </p>
          <p
            style={{
              paddingRight: "104px",
              fontSize: "16px",
              fontWeight: 450,
            }}
          >
            Login
          </p>
          <p
            style={{
              border: "1px solid #FFFFFF",
              borderRadius: "8px",
              padding: "16px 32px 16px 32px",
              height: "52px",
              fontSize: "16px",
              fontWeight: 450,
            }}
          >
            Sign up
          </p>
        </div>
      </header>
      <div
        style={{
          height: "434px",
          paddingTop: "153px",
          paddingBottom: "70px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#19201D", fontSize: "48px", fontWeight: "900px" }}>
          Contact us
        </p>
        <p>
          Have a concern, please do send us a message we are always available to
          help out
        </p>
        <p style={{ color: "#19201D", paddingTop: "24px" }}>
          <img
            src="/images/phone.svg"
            alt="phone-logo"
            style={{ paddingRight: "9.67px" }}
          />
          090999999999
        </p>
        <p style={{ color: "#19201D", paddingTop: "16px" }}>
          <img
            src="/images/message.svg"
            alt="message-logo"
            style={{ paddingRight: "9.33px" }}
          />
          help@gotru.com
        </p>
      </div>
      <div
        style={{
          height: "508px",
          paddingTop: "136.48px",
          paddingBottom: "106.5px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#19201D",
            fontWeight: "900px",
            fontSize: "48px",
            paddingTop: "16px",
            width: " 750.29px",
            marginLeft: "25%",
          }}
        >
          Sign up with Gotru hub to start managing your team
        </p>
        <p style={{ color: "#444A47", paddingTop: "24px" }}>
          Create account instantly to start managing your team and resources
        </p>
        <p
          style={{
            border: "1px solid #FFFFFF",
            borderRadius: "8px",
            background: "#19201D",
            marginTop: "49.02px",
            width: "261px",
            height: "52px",
            marginLeft: "40%",
            color:"white",
            padding: "16px 32px 16px 32px",
          }}
        >
          Get Started with Gotru hub
        </p>
      </div>
    </div>
  );
}

export default App;
