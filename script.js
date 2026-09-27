document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       EXISTING VELTRIX GUIDE BUTTONS
       ================================= */

    const startTutorial = document.getElementById("startTutorial");
    const learnMore = document.getElementById("learnMore");


    if (startTutorial) {

        startTutorial.addEventListener("click", () => {

            document.getElementById("tutorial")?.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    if (learnMore) {

        learnMore.addEventListener("click", () => {

            document.getElementById("tutorial")?.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /* =================================
       STEP 3A
       TUTORIAL CARD NAVIGATION
       ================================= */

    const tutorialCards = document.querySelectorAll(".card-button");


    tutorialCards.forEach(button => {

        button.addEventListener("click", () => {

            const topic = button.dataset.topic;

            if (!topic) {
                return;
            }

            window.location.href = `tutorial.html?topic=${topic}`;

        });

    });


    /* =================================
       VELTRIX SUPPORT ASSISTANT
       ================================= */

    const openSupportBtn =
        document.getElementById("open-support-btn");

    const closeSupportBtn =
        document.getElementById("close-support-btn");

    const supportChat =
        document.getElementById("support-chat");

    const supportInput =
        document.getElementById("support-input");

    const sendSupportBtn =
        document.getElementById("send-support-btn");

    const chatMessages =
        document.getElementById("chat-messages");

    const clearChatBtn =
        document.getElementById("clear-chat-btn");

    const quickHelpButtons =
        document.querySelectorAll(".quick-help-btn");


    /* =================================
       OPEN SUPPORT ASSISTANT
       ================================= */

    if (openSupportBtn && supportChat) {

        openSupportBtn.addEventListener("click", () => {

            supportChat.classList.remove("hidden");

            supportChat.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            setTimeout(() => {

                supportInput?.focus();

            }, 300);

        });

    }


    /* =================================
       CLOSE SUPPORT ASSISTANT
       ================================= */

    if (closeSupportBtn && supportChat) {

        closeSupportBtn.addEventListener("click", () => {

            supportChat.classList.add("hidden");

        });

    }


    /* =================================
       ADD MESSAGE TO CHAT
       ================================= */

    function addUserMessage(message) {

        if (!chatMessages) {
            return;
        }

        const messageDiv =
            document.createElement("div");

        messageDiv.className = "user-message";

        messageDiv.innerHTML = `
            <p>${escapeHTML(message)}</p>
        `;

        chatMessages.appendChild(messageDiv);

        scrollChatToBottom();

    }


    function addBotMessage(message) {

        if (!chatMessages) {
            return;
        }

        const messageDiv =
            document.createElement("div");

        messageDiv.className = "bot-message";

        messageDiv.innerHTML = `
            <strong>VELTRIX Support</strong>
            <p>${message}</p>
        `;

        chatMessages.appendChild(messageDiv);

        scrollChatToBottom();

    }


    /* =================================
       SAFELY DISPLAY USER TEXT
       ================================= */

    function escapeHTML(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =================================
       KEEP CHAT SCROLLED TO BOTTOM
       ================================= */

    function scrollChatToBottom() {

        if (chatMessages) {

            chatMessages.scrollTop =
                chatMessages.scrollHeight;

        }

    }


    /* =================================
       SUPPORT KNOWLEDGE BASE
       ================================= */

    function getSupportResponse(userText) {

        const text =
            userText.toLowerCase().trim();


        /* ---------- KEYPAD ---------- */

        if (
            text.includes("keypad") ||
            text.includes("keys") ||
            text.includes("button") && text.includes("password")
        ) {

            return `
                Let's troubleshoot the keypad step by step.<br><br>

                <strong>1.</strong> Make sure the keypad is firmly connected
                to the Arduino.<br>

                <strong>2.</strong> Check that the keypad wires are connected
                to the intended Arduino pins.<br>

                <strong>3.</strong> Restart the Arduino and try entering
                the password again.<br>

                <strong>4.</strong> Test several different keypad buttons
                to see whether the problem affects one key or the whole keypad.<br><br>

                If the LCD is working but the keypad still does not respond,
                the problem may be related to the keypad wiring or program
                configuration.
            `;

        }


        /* ---------- LCD ---------- */

        if (
            text.includes("lcd") ||
            text.includes("display") ||
            text.includes("screen")
        ) {

            return `
                Let's check the LCD.<br><br>

                <strong>1.</strong> Check that the LCD has power and ground.<br>

                <strong>2.</strong> Check the LCD wiring carefully.<br>

                <strong>3.</strong> Check the 10k potentiometer used for
                LCD contrast.<br>

                <strong>4.</strong> If you can see dark blocks but no text,
                check the contrast setting and the LCD connections.<br>

                <strong>5.</strong> Restart the Arduino and test the LCD again.<br><br>

                If the LCD is completely blank, check its power and wiring first.
            `;

        }


        /* ---------- BLUETOOTH ---------- */

        if (
            text.includes("bluetooth") ||
            text.includes("hc-05") ||
            text.includes("hc05") ||
            text.includes("wireless")
        ) {

            return `
                Let's troubleshoot Bluetooth.<br><br>

                <strong>1.</strong> Make sure the HC-05 is connected correctly.<br>

                <strong>2.</strong> Check the module's power and ground connections.<br>

                <strong>3.</strong> Make sure the mobile device has Bluetooth
                enabled.<br>

                <strong>4.</strong> Check that the VELTRIX app is using the
                correct Bluetooth connection.<br>

                <strong>5.</strong> If the app connects but the door does not
                respond, the Arduino communication and command configuration
                should be checked.<br><br>

                Do not change the Arduino Bluetooth wiring unless you are
                following the verified VELTRIX wiring configuration.
            `;

        }


        /* ---------- MOBILE APP ---------- */

        if (
            text.includes("app") ||
            text.includes("mobile") ||
            text.includes("phone") ||
            text.includes("login") ||
            text.includes("sign in") ||
            text.includes("signup") ||
            text.includes("sign up")
        ) {

            return `
                Let's troubleshoot the VELTRIX mobile app.<br><br>

                <strong>1.</strong> Make sure the app is running correctly.<br>

                <strong>2.</strong> Check that you are using the correct
                account credentials.<br>

                <strong>3.</strong> Check Bluetooth permissions and connection
                settings on the phone.<br>

                <strong>4.</strong> Make sure the HC-05 is available if you are
                trying to control the physical lock.<br>

                <strong>5.</strong> If the app opens normally but a door command
                does not work, check the Bluetooth-to-Arduino communication.<br><br>

                The exact behavior depends on the current VELTRIX app
                implementation.
            `;

        }


        /* ---------- DOOR ---------- */

        if (
            text.includes("door") ||
            text.includes("unlock") ||
            text.includes("lock") ||
            text.includes("servo")
        ) {

            return `
                Let's troubleshoot the door mechanism.<br><br>

                <strong>1.</strong> Check whether the Arduino is powered.<br>

                <strong>2.</strong> Check the servo motor connection.<br>

                <strong>3.</strong> Make sure the locking mechanism is aligned
                correctly with the servo.<br>

                <strong>4.</strong> Try controlling the door using another
                available access method, such as the keypad or internal button,
                to determine whether the problem is with the door mechanism
                or the control method.<br>

                <strong>5.</strong> If the servo moves but the door does not
                lock or unlock properly, check the mechanical alignment.<br><br>

                Do not force the door or servo if the mechanism is physically
                stuck.
            `;

        }


        /* ---------- THEFT MODE ---------- */

        if (
            text.includes("theft mode") ||
            text.includes("theft")
        ) {

            return `
                Theft Mode is an administrator-controlled VELTRIX security
                feature.<br><br>

                If you are having trouble accessing Theft Mode, check that
                you are using the required administrator authentication and
                that the feature is available in the current VELTRIX
                configuration.
            `;

        }


        /* ---------- NIGHT MODE ---------- */

        if (
            text.includes("night mode") ||
            text.includes("night")
        ) {

            return `
                Night Mode is a VELTRIX security mode available through
                the system controls.<br><br>

                If Night Mode is not behaving as expected, first check that
                the app is connected correctly and that the selected door
                option is correct.<br><br>

                If the physical doors do not respond, check the Arduino,
                servo connections, and communication path.
            `;

        }


        /* ---------- PASSWORD ---------- */

        if (
            text.includes("password") ||
            text.includes("passcode") ||
            text.includes("pin") ||
            text.includes("forgot")
        ) {

            return `
                Let's check the access credentials.<br><br>

                First determine which credential you are trying to use:
                the door entry password, a special passcode, or your
                mobile-app account credentials.<br><br>

                Make sure you are entering the correct credential and
                follow the appropriate VELTRIX password-change procedure.

                Some password changes require administrator authentication.
            `;

        }


        /* ---------- INTERNAL BUTTON ---------- */

        if (
            text.includes("internal button") ||
            text.includes("inside button") ||
            text.includes("inside")
        ) {

            return `
                Let's check the internal door-control button.<br><br>

                <strong>1.</strong> Check that the button is connected correctly.<br>

                <strong>2.</strong> Make sure the Arduino is powered.<br>

                <strong>3.</strong> Test the button while observing the
                corresponding door mechanism.<br>

                <strong>4.</strong> If the button works electrically but the
                servo does not respond, check the servo and Arduino control
                path.<br><br>

                The two internal buttons are intended to control their
                corresponding doors.
            `;

        }


        /* ---------- ARDUINO ---------- */

        if (
            text.includes("arduino") ||
            text.includes("board") ||
            text.includes("code") ||
            text.includes("program")
        ) {

            return `
                Let's check the Arduino system.<br><br>

                <strong>1.</strong> Confirm that the Arduino is powered.<br>

                <strong>2.</strong> Check the wiring for the connected
                components.<br>

                <strong>3.</strong> If you recently changed the code,
                verify that the program compiles successfully.<br>

                <strong>4.</strong> Restart the Arduino and test the
                components individually if necessary.<br><br>

                If you have an Arduino error message, type the exact error
                message into this chat and I can help identify what part
                of the system it relates to.
            `;

        }


        /* ---------- GREETING ---------- */

        if (
            text === "hi" ||
            text === "hello" ||
            text === "hey" ||
            text.includes("help me")
        ) {

            return `
                Of course! 👋<br><br>

                Tell me what is wrong with your VELTRIX system.

                You can ask about the <strong>door, keypad, LCD,
                mobile app, Bluetooth, passwords, Arduino, Night Mode,
                or Theft Mode</strong>.
            `;

        }


        /* ---------- DEFAULT ---------- */

        return `
            I don't have a specific troubleshooting answer for that yet.<br><br>

            Try describing the problem using words such as
            <strong>door, keypad, LCD, Bluetooth, app, password,
            Arduino, Night Mode, or Theft Mode</strong>.<br><br>

            You can also choose one of the quick-help buttons above.
        `;

    }


    /* =================================
       SEND MESSAGE
       ================================= */

    function sendSupportMessage() {

        if (!supportInput || !chatMessages) {
            return;
        }

        const message =
            supportInput.value.trim();

        if (message === "") {
            return;
        }

        addUserMessage(message);

        supportInput.value = "";

        // Small delay makes the response feel more natural.
        setTimeout(() => {

            const response =
                getSupportResponse(message);

            addBotMessage(response);

        }, 350);

    }


    /* =================================
       SEND BUTTON
       ================================= */

    if (sendSupportBtn) {

        sendSupportBtn.addEventListener("click", () => {

            sendSupportMessage();

        });

    }


    /* =================================
       ENTER KEY
       ================================= */

    if (supportInput) {

        supportInput.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                sendSupportMessage();

            }

        });

    }


    /* =================================
       QUICK BUTTON CONNECTION
       ================================= */

    function connectQuickHelpButtons() {

        if (!chatMessages) {
            return;
        }

        const buttons =
            chatMessages.querySelectorAll(".quick-help-btn");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const problem =
                    button.dataset.problem;

                let question = "";


                switch (problem) {

                    case "door":
                        question = "My door is not working";
                        break;

                    case "keypad":
                        question = "My keypad is not working";
                        break;

                    case "lcd":
                        question = "My LCD is not working";
                        break;

                    case "app":
                        question =
                            "I am having a problem with the mobile app";
                        break;

                    case "bluetooth":
                        question =
                            "My Bluetooth is not connecting";
                        break;

                    default:
                        question = "I have another problem";

                }


                addUserMessage(question);


                setTimeout(() => {

                    addBotMessage(
                        getSupportResponse(question)
                    );

                }, 350);

            });

        });

    }


    /* =================================
       INITIAL QUICK HELP CONNECTION
       ================================= */

    connectQuickHelpButtons();


    /* =================================
       CLEAR CHAT
       ================================= */

    if (clearChatBtn) {

        clearChatBtn.addEventListener("click", () => {

            if (!chatMessages) {
                return;
            }

            chatMessages.innerHTML = `

                <div class="bot-message">

                    <strong>VELTRIX Support</strong>

                    <p>
                        Hi! 👋 I'm the VELTRIX Support Assistant.
                        Tell me what problem you're facing and I'll
                        help you troubleshoot it step by step.
                    </p>

                </div>


                <div class="quick-help">

                    <p>
                        What do you need help with?
                    </p>

                    <button
                        class="quick-help-btn"
                        data-problem="door">
                        🔐 Door
                    </button>

                    <button
                        class="quick-help-btn"
                        data-problem="keypad">
                        🔢 Keypad
                    </button>

                    <button
                        class="quick-help-btn"
                        data-problem="lcd">
                        📺 LCD
                    </button>

                    <button
                        class="quick-help-btn"
                        data-problem="app">
                        📱 Mobile App
                    </button>

                    <button
                        class="quick-help-btn"
                        data-problem="bluetooth">
                        🔵 Bluetooth
                    </button>

                    <button
                        class="quick-help-btn"
                        data-problem="other">
                        🛠 Other Problem
                    </button>

                </div>

            `;


            // Reconnect quick-help buttons after rebuilding the chat.
            connectQuickHelpButtons();

            scrollChatToBottom();

        });

    }

});