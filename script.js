let dwmChosen = document.querySelectorAll(".user-bottom");
let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
//fetch
let container = document.querySelector(".user-container");
fetch("data.json")
.then(Response => Response.json())
.then(data =>{
    data.forEach(time =>{
        container.innerHTML +=`
            <div class="user-box">
                <img src=${time.icon} alt="${time.alt} picture">
                <div class="user-box-body">
                    <div class="user-head">
                        <p class="title">${time.title}</p>
                        <button class="touch"><p>...</p></button>
                    </div>
                    <div class = "rw">
                        <p class="d-hrs">${time.timeframes.daily.current}</p>
                        <p class="w-hrs">${time.timeframes.weekly.current}</p>
                        <p class="m-hrs">${time.timeframes.monthly.current}</p>
                        <p class="last-day">Yesterday - ${time.timeframes.daily.previous}</p>
                        <p class="last-week">Last Week - ${time.timeframes.weekly.previous}</p>
                        <p class="last-month">Last Month - ${time.timeframes.monthly.previous}</p>
                    </div>
                </div>
            </div>
        `
    })
    let dayHrs = document.querySelectorAll(".d-hrs");
    let prevDay = document.querySelectorAll(".last-day");
    let weekHrs = document.querySelectorAll(".w-hrs");
    let prevWeek = document.querySelectorAll(".last-week");
    let monthHrs = document.querySelectorAll(".m-hrs");
    let prevMonth = document.querySelectorAll(".last-month");
    // change
dwmChosen.forEach(dwm =>{
    dwm.addEventListener("click",function(e){
        if (e.target.className.includes("daily")){
            monthly.classList.remove("current");
            monthHrs.forEach(el => el.classList.remove("show-block"));
            prevMonth.forEach(el => el.classList.remove("show-block"));
            weekly.classList.remove("current");
            weekHrs.forEach(el => el.style.display="none");
            prevWeek.forEach(el => el.style.display="none");
            daily.classList.add("current");
            dayHrs.forEach(el => el.classList.add("show-block"));
            prevDay.forEach(el => el.classList.add("show-block"));
        }
        else if (e.target.className.includes("weekly")){
            daily.classList.remove("current");
            dayHrs.forEach(el => el.classList.remove("show-block"));
            prevDay.forEach(el => el.classList.remove("show-block"));
            monthly.classList.remove("current");
            monthHrs.forEach(el => el.classList.remove("show-block"));
            prevMonth.forEach(el => el.classList.remove("show-block"));
            weekly.classList.add("current");
            weekHrs.forEach(el => el.style.display="block");
            prevWeek.forEach(el => el.style.display="block");
        }
        else if (e.target.className.includes("monthly")){
            weekly.classList.remove("current");
            weekHrs.forEach(el => el.style.display="none");
            prevWeek.forEach(el => el.style.display="none");
            daily.classList.remove("current");
            dayHrs.forEach(el => el.classList.remove("show-block"));
            prevDay.forEach(el => el.classList.remove("show-block"));
            monthly.classList.add("current");
            monthHrs.forEach(el => el.classList.add("show-block"));
            prevMonth.forEach(el => el.classList.add("show-block"));
        }
        else{
            console.log("Nothing...")
        }
    })
})

})
