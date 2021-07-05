import './css/common.css';



class CountdownTimer {

    constructor({ selector, targetDate} ) {
      
        this.targetDate = targetDate;
        this.selector = selector;

    }
    start() {
        const targetDate = this.targetDate;

        setInterval(() => {
            const startTime = Date.now();
            const deltaTime = targetDate - startTime;
            const time = this.getTimeComponents(deltaTime);

            this.updateClockFace(time);
        }, 1000)
    }
    getTimeComponents(time) {

        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
    pad(value) {
        return String(value).padStart(2, '0');
    };

    selectTimerByID() {
        const selector = this.selector;
        const  refs = {
            daysText: document.querySelector(`${selector} span[data-value="days"]`),
            hoursText: document.querySelector(`${selector} span[data-value="hours"]`),
            minsText: document.querySelector(`${selector} span[data-value="mins"]`),
            secsText: document.querySelector(`${selector} span[data-value="secs"]`),
        };
        return refs
    };
    updateClockFace({ days, hours, mins, secs }) {
    const refs = this.selectTimerByID();
        
    refs.daysText.textContent = `${days}`;
    refs.hoursText.textContent = `${hours}`;
    refs.minsText.textContent = `${mins}`;
    refs.secsText.textContent = `${secs}`;
    
    };
    
};

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 19, 2021'),
});


countdownTimer.start();





