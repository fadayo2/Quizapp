const gravityQuiz = [
    {
      question: "Which of the following statements about gravity is correct?",
      options: [
        "Gravity only acts on the surface of a planet",
        "Gravity is always repulsive",
        "The force of gravity decreases as the distance between objects increases",
        "Gravity does not affect objects in space"
      ],
      answer: "The force of gravity decreases as the distance between objects increases"
    },
    {
      question: "The force of gravity acts:",
      options: [
        "Only on objects with mass",
        "Only in space",
        "Only when objects are in motion",
        "On all objects, regardless of mass"
      ],
      answer: "On all objects, regardless of mass"
    },
    {
      question: "A body of mass 10 kg is acted upon by a gravitational force of 98 N. What is the acceleration due to gravity? (g = ?)",
      options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "12 m/s²"],
      answer: "9.8 m/s²"
    },
    {
      question: "If an astronaut moves from Earth to the Moon, which of the following remains constant?",
      options: ["Weight", "Gravity", "Mass", "Acceleration"],
      answer: "Mass"
    },
    {
      question: "What is the SI unit of gravitational force?",
      options: ["Joule", "Newton", "Pascal", "Watt"],
      answer: "Newton"
    },
    {
      question: "The acceleration due to gravity on Earth is approximately:",
      options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "12 m/s²"],
      answer: "9.8 m/s²"
    },
    {
      question: "Who formulated the Universal Law of Gravitation?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Kepler"],
      answer: "Isaac Newton"
    },
    {
      question: "If Earth's radius doubled while its mass remained the same, how would gravity at the surface change?",
      options: ["Increase four times", "Remain the same", "Reduce to one-fourth", "Reduce to half"],
      answer: "Reduce to one-fourth"
    },
    {
      question: "A body is thrown vertically upward. At the highest point, its velocity is:",
      options: ["Maximum", "Minimum", "Zero", "Equal to its initial velocity"],
      answer: "Zero"
    },
    {
      question: "The force that keeps planets in orbit around the Sun is called:",
      options: ["Centrifugal force", "Magnetism", "Gravitational force", "Nuclear force"],
      answer: "Gravitational force"
    },
    {
      question: "Which of the following factors affects the gravitational force between two objects?",
      options: ["Mass and distance", "Temperature", "Shape", "Magnetic field"],
      answer: "Mass and distance"
    },
    {
      question: "If the mass of an object is doubled, how does the gravitational force between it and another object change?",
      options: ["Doubles", "Halves", "Remains constant", "Becomes one-fourth"],
      answer: "Doubles"
    },
    {
      question: "An astronaut's weight on Mars compared to Earth will be:",
      options: ["The same", "Higher", "Lower", "Unpredictable"],
      answer: "Lower"
    },
    {
      question: "If Earth's gravity suddenly disappeared, what would happen?",
      options: ["Objects would float away", "Objects would become heavier", "Objects would move in circles", "Time would stop"],
      answer: "Objects would float away"
    },
    {
      question: "What happens to the acceleration due to gravity at high altitudes?",
      options: ["It increases", "It decreases", "It remains constant", "It doubles"],
      answer: "It decreases"
    },
    {
      question: "The acceleration due to gravity on a planet is 4 m/s². What is the weight of a 10 kg object on that planet?",
      options: ["10 N", "40 N", "100 N", "400 N"],
      answer: "40 N"
    },
    {
      question: "Why do astronauts experience weightlessness in space?",
      options: ["There is no gravity", "They are falling freely", "The spacecraft cancels gravity", "They are beyond Earth's gravity"],
      answer: "They are falling freely"
    },
    {
      question: "How does mass affect weight?",
      options: ["Directly proportional", "Inversely proportional", "No relationship", "Exponentially related"],
      answer: "Directly proportional"
    },
    {
      question: "What keeps the Moon in orbit around the Earth?",
      options: ["Centrifugal force", "Magnetic force", "Gravitational force", "Frictional force"],
      answer: "Gravitational force"
    },
    {
      question: "A feather and a hammer are dropped on the Moon. Which one lands first?",
      options: ["The hammer", "The feather", "They land at the same time", "It depends on air resistance"],
      answer: "They land at the same time"
    },
    {
      question: "How does gravity affect time?",
      options: [
        "Time moves faster in stronger gravity",
        "Time moves slower in stronger gravity",
        "Gravity has no effect on time",
        "Time stops in strong gravity"
      ],
      answer: "Time moves slower in stronger gravity"
    },
    {
      question: "The gravitational force between two masses of 5 kg and 10 kg placed 2 m apart is approximately:",
      options: ["1.67 × 10⁻¹⁰ N", "3.34 × 10⁻¹⁰ N", "6.67 × 10⁻¹¹ N", "None of the above"],
      answer: "1.67 × 10⁻¹⁰ N"
    },
    {
      question: "What happens to an object’s weight when moved to a planet with twice the gravitational acceleration of Earth?",
      options: ["It remains the same", "It doubles", "It halves", "It becomes zero"],
      answer: "It doubles"
    },
    {
      question: "Which planet in the solar system has the weakest gravitational pull?",
      options: ["Jupiter", "Earth", "Mars", "Mercury"],
      answer: "Mercury"
    },
    {
      question: "The force of gravity between two objects becomes zero when:",
      options: ["They are infinitely far apart", "They have the same mass", "They are in motion", "They are on Earth"],
      answer: "They are infinitely far apart"
    },
    {
      question: "What is the relationship between weight and mass?",
      options: ["Weight is mass divided by gravity", "Weight is mass multiplied by gravity", "Weight is independent of mass", "Weight is equal to mass"],
      answer: "Weight is mass multiplied by gravity"
    },
    {
      question: "The escape velocity from Earth’s surface is approximately:",
      options: ["8 km/s", "11.2 km/s", "20 km/s", "30 km/s"],
      answer: "11.2 km/s"
    },
    {
      question: "What is the approximate value of acceleration due to gravity at the Earth's surface?",
      options: ["1 m/s²", "4.9 m/s²", "9.8 m/s²", "15 m/s²"],
      answer: "9.8 m/s²"
    },
    {
      question: "What is the weight of a 50 kg mass on Earth?",
      options: ["50 N", "500 N", "5 N", "490 N"],
      answer: "490 N"
    },
    {
      question: "Why do objects fall at the same rate in a vacuum?",
      options: ["No gravitational force", "No air resistance", "Objects have no weight", "Gravity is stronger in vacuum"],
      answer: "No air resistance"
    }
  ];
  
//   console.log(gravityQuiz.length); // Should print 50

  
let currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex")) || 0;
        let selectedAnswers = JSON.parse(localStorage.getItem("selectedAnswers")) || Array(gravityQuiz.length).fill(null);
        let score = 0;

        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");
        const nextButton = document.getElementById("next-btn");
        const prevButton = document.getElementById("prev-btn");
        const scoreContainer = document.getElementById("score-container");
        const navButtonsContainer = document.getElementById("nav-buttons");

        function loadQuestion() {
            resetState();
            let currentQuestion = gravityQuiz[currentQuestionIndex];
            questionElement.innerText = `Q${currentQuestionIndex + 1}: ${currentQuestion.question}`;

            let optionLetters = ["A", "B", "C", "D"];
            currentQuestion.options.forEach((option, index) => {
                const button = document.createElement("button");
                button.innerText = `${optionLetters[index]}. ${option}`;
                button.classList.add("option");
                if (selectedAnswers[currentQuestionIndex] === option) {
                    button.classList.add("active");
                }
                button.addEventListener("click", () => selectAnswer(button, option));
                optionsElement.appendChild(button);
            });

            updateButtons();
            updateNavButtons();
        }

        function selectAnswer(button, selectedOption) {
            selectedAnswers[currentQuestionIndex] = selectedOption;
            localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
            document.querySelectorAll(".option").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            updateNavButtons();
        }

        function updateButtons() {
            prevButton.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
            nextButton.innerText = currentQuestionIndex < gravityQuiz.length - 1 ? "Next" : "Finish";
        }

        function resetState() {
            optionsElement.innerHTML = "";
            scoreContainer.innerHTML = "";
        }

        function updateNavButtons() {
            navButtonsContainer.innerHTML = "";
            gravityQuiz.forEach((_, index) => {
                const btn = document.createElement("button");
                btn.innerText = index + 1;
                btn.classList.add("nav-btn");

                if (selectedAnswers[index]) {
                    btn.classList.add("answered"); // Green when answered
                } else {
                    btn.classList.add("unanswered"); // Red when unanswered
                }

                if (index === currentQuestionIndex) {
                    btn.classList.add("active"); // Blue for active question
                }

                btn.addEventListener("click", () => {
                    currentQuestionIndex = index;
                    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
                    loadQuestion();
                });

                navButtonsContainer.appendChild(btn);
            });
        }

        nextButton.addEventListener("click", () => {
            if (selectedAnswers[currentQuestionIndex] === null) {
                Swal.fire({
                    title: "Oops!",
                    text: "Please select an answer before proceeding.",
                    icon: "warning",
                    confirmButtonColor: "#007BFF"
                });
                return;
            }
        
            if (currentQuestionIndex < gravityQuiz.length - 1) {
                currentQuestionIndex++;
                localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
                loadQuestion();
            } else {
                calculateScore();
                showResults();
            }
        });
        

        prevButton.addEventListener("click", () => {
            if (currentQuestionIndex > 0)    {
                currentQuestionIndex--;
                localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
                loadQuestion();
            }
        });

        function calculateScore() {
            score = 0;
            selectedAnswers.forEach((answer, index) => {
                if (answer === gravityQuiz[index].answer) {
                    score++;
                }
            });
        }
        
        function showResults() {
            questionElement.innerText = "Quiz Completed!";
            optionsElement.innerHTML = `<h3>Your Score: ${score} / ${gravityQuiz.length}</h3>`;
            nextButton.style.display = "none";
            prevButton.style.display = "none";
            navButtonsContainer.style.display = "none";
        
            // Optionally, show a restart button
            const restartButton = document.createElement("button");
            restartButton.innerText = "Restart Quiz";
            restartButton.classList.add("restart-btn");
            restartButton.addEventListener("click", () => {
                localStorage.clear();
                location.reload();
            });
        
            scoreContainer.appendChild(restartButton);
        }        

loadQuestion();