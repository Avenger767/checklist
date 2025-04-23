const slides = [
    "Welcome to the CSA Drive Troubleshooting Module.",
    "Objectives: Identify Fault Codes, Validate CSA Faults, Perform Troubleshooting.",
    "Docs: CDS46007, CDS46008, CDS7324.",
    "Identify Faults via GUI and CSA Drive LED indicators.",
    "Step 1: Check Circuit Breakers via GUI and cabinet.",
    "Step 2: Inspect Power & Signal Connections.",
    "Step 3: Verify EtherCAT Settings and Cables.",
    "Step 4: Confirm Offset Values.",
    "Step 5: Swap Encoder Cables to Test.",
    "Step 6: Swap Control Heads.",
    "Step 7: Swap Actuator Cable Sets.",
    "Step 8: Engage Motion System and Evaluate.",
    "Step 9: Replace CSA Drive or Continue Troubleshooting.",
    "End of Module. Contact CAE Support if unresolved."
];

let currentSlide = 0;
const contentDiv = document.getElementById('content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateSlide() {
    contentDiv.innerHTML = `<p>${slides[currentSlide]}</p>`;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

updateSlide();
