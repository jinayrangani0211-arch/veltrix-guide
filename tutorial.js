document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       VELTRIX TUTORIAL DATA
       ========================================================= */

    const tutorials = {

        /* =====================================================
           PHYSICAL LOCK
           ===================================================== */

        "physical-lock": {
            icon: "🔐",
            title: "Physical Lock",
            description:
                "Learn how the physical VELTRIX smart door-lock system works and how its hardware components work together.",
            category: "PHYSICAL SYSTEM",

            steps: [

                {
                    title: "What Is the VELTRIX Physical System?",
                    content: `
                        <p>
                            The physical VELTRIX system is the hardware
                            part of the smart door-lock project.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Main VELTRIX hardware</strong>
                            <ul>
                                <li>Arduino Uno</li>
                                <li>4×4 membrane keypad</li>
                                <li>16×2 LCD display</li>
                                <li>10k potentiometer</li>
                                <li>Two servo motors</li>
                                <li>Two internal door-control buttons</li>
                                <li>HC-05 Bluetooth module</li>
                                <li>Breadboard and jumper wires</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "How the Hardware Works Together",
                    content: `
                        <p>
                            VELTRIX works as a connected system rather
                            than as separate components.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Basic system flow</strong>
                            <p>
                                Keypad / Mobile App / Internal Button
                                → Arduino Uno → Door Control
                            </p>
                        </div>
                    `
                },

                {
                    title: "Arduino Uno — The Main Controller",
                    content: `
                        <p>
                            The Arduino Uno is the central controller
                            of the VELTRIX physical system.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>The Arduino handles:</strong>
                            <ul>
                                <li>Keypad input</li>
                                <li>Internal button input</li>
                                <li>LCD output</li>
                                <li>Servo control</li>
                                <li>Access logic</li>
                                <li>Bluetooth communication</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "4×4 Keypad",
                    content: `
                        <p>
                            The 4×4 membrane keypad provides physical
                            input to the VELTRIX system.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>General workflow</strong>
                            <ol>
                                <li>Enter the required information.</li>
                                <li>The Arduino reads the keypad.</li>
                                <li>The program processes the input.</li>
                                <li>The LCD provides feedback.</li>
                                <li>The authorized operation is performed.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Using the Keypad",
                    content: `
                        <p>
                            Depending on the current VELTRIX firmware,
                            the keypad can be used for access and
                            authorized system functions.
                        </p>

                        <div class="tutorial-info-box">
                            <ul>
                                <li>Door access</li>
                                <li>Special passcode entry</li>
                                <li>System functions</li>
                                <li>Credential management</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "16×2 LCD Display",
                    content: `
                        <p>
                            The 16×2 LCD provides visual feedback while
                            operating the physical VELTRIX system.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>The LCD may display:</strong>
                            <ul>
                                <li>Access prompts</li>
                                <li>Password-entry instructions</li>
                                <li>Access granted</li>
                                <li>Access denied</li>
                                <li>System status</li>
                                <li>Welcome messages</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "LCD Contrast — 10k Potentiometer",
                    content: `
                        <p>
                            The 10k potentiometer controls the contrast
                            of the 16×2 LCD.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>If the LCD appears blank:</strong>
                            <ol>
                                <li>Check power.</li>
                                <li>Check ground.</li>
                                <li>Check LCD wiring.</li>
                                <li>Adjust the potentiometer slowly.</li>
                                <li>Check the Arduino program.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Two-Door System",
                    content: `
                        <p>
                            VELTRIX is designed around two physical doors.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Door structure</strong>
                            <ul>
                                <li>Door 1 → Servo 1</li>
                                <li>Door 2 → Servo 2</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Servo Motors",
                    content: `
                        <p>
                            Servo motors convert Arduino control signals
                            into mechanical movement.
                        </p>

                        <div class="tutorial-info-box">
                            <ul>
                                <li>Servo 1 controls Door 1.</li>
                                <li>Servo 2 controls Door 2.</li>
                                <li>The Arduino determines when each servo moves.</li>
                                <li>The mechanical linkage operates the lock.</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Internal Door Buttons",
                    content: `
                        <p>
                            Two physical buttons are provided inside
                            the protected area.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Button mapping</strong>
                            <ul>
                                <li>Internal Button 1 → Door 1</li>
                                <li>Internal Button 2 → Door 2</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "HC-05 Bluetooth Module",
                    content: `
                        <p>
                            The HC-05 provides the wireless communication
                            link between the mobile application and Arduino.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Communication path</strong>
                            <p>
                                Mobile App → Bluetooth → HC-05
                                → Arduino → Door Control
                            </p>
                        </div>
                    `
                },

                {
                    title: "Normal Physical Access Flow",
                    content: `
                        <p>
                            A typical physical access operation follows
                            a programmed sequence.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>User approaches the system.</li>
                                <li>User enters the required information.</li>
                                <li>Arduino processes the input.</li>
                                <li>LCD provides feedback.</li>
                                <li>Authorized operation is performed.</li>
                                <li>The corresponding servo operates.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "What Happens When Access Is Denied?",
                    content: `
                        <p>
                            If the entered credential does not satisfy
                            the programmed access rules, the authorized
                            door operation should not be performed.
                        </p>

                        <div class="tutorial-info-box">
                            <ul>
                                <li>LCD can display an access-denied message.</li>
                                <li>The corresponding servo remains in its configured state.</li>
                                <li>The user can retry according to the firmware.</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Physical Lock Safety Checks",
                    content: `
                        <p>
                            Before testing the physical system, check
                            that the hardware is properly assembled.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>Arduino is securely positioned.</li>
                                <li>Wires are firmly connected.</li>
                                <li>No accidental short circuits are present.</li>
                                <li>Servo mechanisms are aligned.</li>
                                <li>Doors can move normally.</li>
                                <li>LCD wiring is secure.</li>
                                <li>Keypad wiring is secure.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Physical Lock Troubleshooting",
                    content: `
                        <p>
                            Isolate one possible problem at a time.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>Check Arduino power.</li>
                                <li>Check component wiring.</li>
                                <li>Check the Arduino program.</li>
                                <li>Test the affected component.</li>
                                <li>Check Bluetooth if applicable.</li>
                                <li>Check the mechanical mechanism.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Physical System Complete",
                    content: `
                        <p>
                            You have completed the Physical Lock tutorial.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>You should now understand:</strong>
                            <ul>
                                <li>Arduino control</li>
                                <li>Keypad input</li>
                                <li>LCD feedback</li>
                                <li>LCD contrast adjustment</li>
                                <li>Two-door servo control</li>
                                <li>Internal buttons</li>
                                <li>HC-05 communication</li>
                            </ul>
                        </div>
                    `
                }

            ]
        },


        /* =====================================================
           MOBILE APP
           ===================================================== */

        "mobile-app": {
            icon: "📱",
            title: "Mobile App",
            description:
                "Learn how to use the VELTRIX mobile application to access door controls, security modes, data and settings.",
            category: "MOBILE APPLICATION",

            steps: [

                {
                    title: "Introduction to the VELTRIX App",
                    content: `
                        <p>
                            The VELTRIX mobile application provides
                            a digital interface for controlling and
                            monitoring the VELTRIX smart door-lock system.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Main areas</strong>
                            <ul>
                                <li>Home</li>
                                <li>Data Analysis</li>
                                <li>Settings</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Before Using the App",
                    content: `
                        <p>
                            Make sure the required phone permissions
                            and Bluetooth functionality are available.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>Open the VELTRIX application.</li>
                                <li>Allow required permissions.</li>
                                <li>Make sure Bluetooth is available when required.</li>
                                <li>Make sure the physical system is powered.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Sign Up",
                    content: `
                        <p>
                            New users can create their VELTRIX account
                            through the sign-up process.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>Select Sign Up.</li>
                                <li>Enter the required information.</li>
                                <li>Create your account credentials.</li>
                                <li>Complete registration.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Sign In",
                    content: `
                        <p>
                            Existing users can sign in using their
                            registered account credentials.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>Select Sign In.</li>
                                <li>Enter your credentials.</li>
                                <li>Continue to the application.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Security PIN / Additional Verification",
                    content: `
                        <p>
                            Depending on the implemented application
                            version, an additional security PIN or
                            verification step may be used.
                        </p>

                        <div class="tutorial-warning-box">
                            🔒 The exact verification flow should match
                            the deployed VELTRIX application.
                        </div>
                    `
                },

                {
                    title: "Home Screen",
                    content: `
                        <p>
                            Home is the main control area of the
                            VELTRIX application.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Main controls</strong>
                            <ul>
                                <li>Lock Door</li>
                                <li>Unlock Door</li>
                                <li>Night Mode</li>
                                <li>Theft Mode</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Lock Door",
                    content: `
                        <p>
                            Lock Door requests that the selected
                            VELTRIX door or doors enter the locked state.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Door choices</strong>
                            <ul>
                                <li>Main Door</li>
                                <li>Outside Door</li>
                                <li>Both Doors</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Unlock Door",
                    content: `
                        <p>
                            Unlock Door requests an unlock operation
                            for the selected door.
                        </p>

                        <div class="tutorial-info-box">
                            <ul>
                                <li>Main Door</li>
                                <li>Outside Door</li>
                                <li>Both Doors</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Main Door",
                    content: `
                        <p>
                            Main Door refers to the primary door in
                            the VELTRIX two-door concept.
                        </p>
                    `
                },

                {
                    title: "Outside Door",
                    content: `
                        <p>
                            Outside Door refers to the first door
                            encountered from outside the protected area.
                        </p>
                    `
                },

                {
                    title: "Both Doors",
                    content: `
                        <p>
                            Both Doors allows an operation to involve
                            both configured door mechanisms.
                        </p>
                    `
                },

                {
                    title: "Night Mode",
                    content: `
                        <p>
                            Night Mode is a security mode available
                            from the VELTRIX application.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Options</strong>
                            <ul>
                                <li>Main Door</li>
                                <li>Outside Door</li>
                                <li>Both Doors</li>
                                <li>Back</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Theft Mode",
                    content: `
                        <p>
                            Theft Mode is a security function intended
                            for the VELTRIX system.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Navigation</strong>
                            <ul>
                                <li>Both Doors</li>
                                <li>Back</li>
                            </ul>
                        </div>

                        <div class="tutorial-warning-box">
                            🔒 Only authorized users should access
                            security functions.
                        </div>
                    `
                },

                {
                    title: "Data Analysis",
                    content: `
                        <p>
                            Data Analysis presents information collected
                            from VELTRIX activity.
                        </p>

                        <div class="tutorial-info-box">
                            <ul>
                                <li>Door activity</li>
                                <li>Manual activity</li>
                                <li>Automatic activity</li>
                                <li>Activity percentages</li>
                                <li>System history</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Settings",
                    content: `
                        <p>
                            Settings contains account and application
                            configuration options.
                        </p>

                        <div class="tutorial-info-box">
                            <ul>
                                <li>Account Information</li>
                                <li>Change Arduino Passcode</li>
                                <li>Change Account Password</li>
                                <li>Version Information</li>
                                <li>Theme</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Account Information",
                    content: `
                        <p>
                            Account Information allows the user to
                            view information associated with their
                            VELTRIX account.
                        </p>
                    `
                },

                {
                    title: "Change Arduino Passcode",
                    content: `
                        <p>
                            This setting is intended for changing
                            the passcode associated with authorized
                            Arduino access.
                        </p>

                        <div class="tutorial-warning-box">
                            🔒 Only an authorized user should change
                            system credentials.
                        </div>
                    `
                },

                {
                    title: "Change Account Password",
                    content: `
                        <p>
                            The account password protects access to
                            the VELTRIX application.
                        </p>

                        <div class="tutorial-info-box">
                            <ul>
                                <li>Use a strong password.</li>
                                <li>Keep it private.</li>
                                <li>Update it when necessary.</li>
                            </ul>
                        </div>
                    `
                },

                {
                    title: "Version Information",
                    content: `
                        <p>
                            Version Information identifies the currently
                            installed VELTRIX application version.
                        </p>
                    `
                },

                {
                    title: "Theme",
                    content: `
                        <p>
                            Theme controls the visual appearance of
                            the VELTRIX application according to the
                            implemented options.
                        </p>
                    `
                },

                {
                    title: "Mobile App Complete",
                    content: `
                        <p>
                            You have completed the VELTRIX Mobile App
                            tutorial.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>You covered:</strong>
                            <ul>
                                <li>Account access</li>
                                <li>Home</li>
                                <li>Door controls</li>
                                <li>Night Mode</li>
                                <li>Theft Mode</li>
                                <li>Data Analysis</li>
                                <li>Settings</li>
                            </ul>
                        </div>
                    `
                }

            ]
        },


        /* =====================================================
           BLUETOOTH
           ===================================================== */

        "bluetooth": {
            icon: "🔵",
            title: "Bluetooth",
            description:
                "Learn how Bluetooth connects the VELTRIX mobile application with the physical system.",
            category: "WIRELESS COMMUNICATION",

            steps: [

                {
                    title: "Bluetooth Communication",
                    content: `
                        <p>
                            Bluetooth provides the wireless communication
                            path between the mobile application and
                            physical VELTRIX system.
                        </p>

                        <div class="tutorial-info-box">
                            <strong>Communication path</strong>
                            <p>
                                Mobile App → Bluetooth → HC-05
                                → Arduino → Door Control
                            </p>
                        </div>
                    `
                },

                {
                    title: "HC-05 Module",
                    content: `
                        <p>
                            The HC-05 provides the wireless communication
                            interface for VELTRIX.
                        </p>
                    `
                },

                {
                    title: "Phone Bluetooth",
                    content: `
                        <p>
                            Bluetooth must be available on the phone
                            when the application communicates with
                            the physical VELTRIX system.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>Bluetooth enabled</li>
                                <li>HC-05 powered</li>
                                <li>Required permissions granted</li>
                                <li>Correct device selected</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "When a Command Does Not Work",
                    content: `
                        <p>
                            If the application appears connected but
                            the physical door does not respond, check
                            the communication path.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>Phone Bluetooth</li>
                                <li>Application connection</li>
                                <li>HC-05</li>
                                <li>Arduino communication</li>
                                <li>Servo and door mechanism</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Bluetooth Tutorial Complete",
                    content: `
                        <p>
                            You now understand the basic Bluetooth
                            communication structure used by VELTRIX.
                        </p>
                    `
                }

            ]
        },


        /* =====================================================
           TROUBLESHOOTING
           ===================================================== */

        "troubleshooting": {
            icon: "🛠️",
            title: "Troubleshooting",
            description:
                "Find solutions to common VELTRIX hardware and connection problems.",
            category: "SUPPORT",

            steps: [

                {
                    title: "Door Not Working",
                    content: `
                        <p>
                            Check Arduino power, servo connections,
                            mechanical alignment and the selected door.
                        </p>

                        <div class="tutorial-info-box">
                            <ol>
                                <li>Check Arduino power.</li>
                                <li>Check servo connection.</li>
                                <li>Check mechanical alignment.</li>
                                <li>Test another control method.</li>
                            </ol>
                        </div>
                    `
                },

                {
                    title: "Keypad Not Working",
                    content: `
                        <p>
                            Check keypad wiring, configured Arduino
                            pins, the program and multiple keypad buttons.
                        </p>
                    `
                },

                {
                    title: "LCD Not Working",
                    content: `
                        <p>
                            Check power, ground, wiring and the 10k
                            potentiometer used for LCD contrast.
                        </p>
                    `
                },

                {
                    title: "Bluetooth Not Connecting",
                    content: `
                        <p>
                            Check phone Bluetooth, permissions,
                            HC-05 power and application connection.
                        </p>
                    `
                },

                {
                    title: "Arduino Problem",
                    content: `
                        <p>
                            Check power, wiring and whether the current
                            Arduino program compiles successfully.
                        </p>
                    `
                },

                {
                    title: "Troubleshooting Complete",
                    content: `
                        <p>
                            You have completed the main VELTRIX
                            troubleshooting tutorial.
                        </p>
                    `
                }

            ]
        }

    };


    /* =========================================================
       3G — PROGRESS TRACKING
       ========================================================= */

    const PROGRESS_KEY = "veltrixTutorialProgress";


    function getProgress() {

        const saved =
            localStorage.getItem(PROGRESS_KEY);

        if (!saved) {
            return {};
        }

        try {
            return JSON.parse(saved);
        } catch (error) {

            console.warn(
                "VELTRIX progress data could not be read."
            );

            return {};
        }
    }


    function saveProgress(progress) {

        localStorage.setItem(
            PROGRESS_KEY,
            JSON.stringify(progress)
        );
    }


    let progress =
        getProgress();


    /* =========================================================
       CREATE DEFAULT PROGRESS
       ========================================================= */

    Object.keys(tutorials).forEach(topicKey => {

        if (!progress[topicKey]) {

            progress[topicKey] = {
                currentStep: 0,
                completed: false
            };

        }

    });


    saveProgress(progress);


    /* =========================================================
       READ CURRENT TOPIC
       ========================================================= */

    const urlParams =
        new URLSearchParams(window.location.search);

    const topic =
        urlParams.get("topic") || "physical-lock";

    const tutorial =
        tutorials[topic] || tutorials["physical-lock"];


    /* =========================================================
       PAGE ELEMENTS
       ========================================================= */

    const tutorialIcon =
        document.getElementById("tutorial-icon");

    const tutorialCategory =
        document.getElementById("tutorial-category");

    const tutorialTitle =
        document.getElementById("tutorial-title");

    const tutorialDescription =
        document.getElementById("tutorial-description");

    const tutorialContent =
        document.getElementById("tutorial-content");

    const progressText =
        document.getElementById("progress-text");

    const progressFill =
        document.getElementById("progress-fill");

    const previousButton =
        document.getElementById("previous-button");

    const nextButton =
        document.getElementById("next-button");


    /* =========================================================
       LOAD SAVED STEP
       ========================================================= */

    let currentStep =
        progress[topic].currentStep || 0;


    if (
        currentStep >= tutorial.steps.length
    ) {

        currentStep =
            tutorial.steps.length - 1;

    }


    /* =========================================================
       UPDATE HEADER
       ========================================================= */

    tutorialIcon.textContent =
        tutorial.icon;

    tutorialCategory.textContent =
        tutorial.category;

    tutorialTitle.textContent =
        tutorial.title;

    tutorialDescription.textContent =
        tutorial.description;


    /* =========================================================
       SAVE CURRENT POSITION
       ========================================================= */

    function saveCurrentProgress() {

        progress[topic].currentStep =
            currentStep;

        saveProgress(progress);

    }


    /* =========================================================
       MARK TUTORIAL COMPLETE
       ========================================================= */

    function completeTutorial() {

        progress[topic].completed =
            true;

        progress[topic].currentStep =
            tutorial.steps.length - 1;

        saveProgress(progress);

    }


    /* =========================================================
       DISPLAY STEP
       ========================================================= */

    function displayStep() {

        const step =
            tutorial.steps[currentStep];


        tutorialContent.innerHTML = `

            <div class="tutorial-step">

                <div class="step-number">
                    STEP ${currentStep + 1}
                </div>

                <h2>
                    ${step.title}
                </h2>

                <div class="step-content">
                    ${step.content}
                </div>

            </div>

        `;


        const totalSteps =
            tutorial.steps.length;

        const currentNumber =
            currentStep + 1;


        progressText.textContent =
            `${currentNumber} / ${totalSteps}`;


        const percentage =
            (currentNumber / totalSteps) * 100;


        progressFill.style.width =
            `${percentage}%`;


        previousButton.disabled =
            currentStep === 0;


        if (
            currentStep === totalSteps - 1
        ) {

            nextButton.textContent =
                "Finish ✓";

        } else {

            nextButton.textContent =
                "Next →";

        }


        saveCurrentProgress();

    }


    /* =========================================================
       PREVIOUS
       ========================================================= */

    previousButton.addEventListener(
        "click",
        () => {

            if (currentStep > 0) {

                currentStep--;

                saveCurrentProgress();

                displayStep();

            }

        }
    );


    /* =========================================================
       NEXT
       ========================================================= */

    nextButton.addEventListener(
        "click",
        () => {

            if (
                currentStep <
                tutorial.steps.length - 1
            ) {

                currentStep++;

                saveCurrentProgress();

                displayStep();

            } else {

                completeTutorial();

                window.location.href =
                    "index.html#tutorial";

            }

        }
    );


    /* =========================================================
       3G — EXPOSE PROGRESS SYSTEM
       ========================================================= */

    window.VeltrixTutorialProgress = {

        getProgress: () => {

            return getProgress();

        },


        resetTopic: (topicName) => {

            if (!tutorials[topicName]) {
                return;
            }

            progress[topicName] = {
                currentStep: 0,
                completed: false
            };

            saveProgress(progress);

        },


        resetAll: () => {

            Object.keys(tutorials).forEach(
                topicName => {

                    progress[topicName] = {
                        currentStep: 0,
                        completed: false
                    };

                }
            );

            saveProgress(progress);

        },


        isCompleted: (topicName) => {

            return !!(
                progress[topicName] &&
                progress[topicName].completed
            );

        },


        getOverallPercentage: () => {

            const topicNames =
                Object.keys(tutorials);

            let totalPercentage = 0;


            topicNames.forEach(topicName => {

                const saved =
                    progress[topicName];

                const totalSteps =
                    tutorials[topicName].steps.length;


                if (saved.completed) {

                    totalPercentage += 100;

                } else {

                    const step =
                        saved.currentStep || 0;

                    totalPercentage +=
                        ((step + 1) / totalSteps) * 100;

                }

            });


            return Math.round(
                totalPercentage /
                topicNames.length
            );

        }

    };


    /* =========================================================
       START TUTORIAL
       ========================================================= */

    displayStep();

});