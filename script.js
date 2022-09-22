const hrs = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");

const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");


startBtn.addEventListener("click", (event) => {

   disabling()

   let h = Number(hrs.value);
   let m = Number(min.value);
   let s = Number(sec.value); 

   let time = setInterval(renderTime, 1000);
   
   function renderTime() {
      if (h != 0 || m != 0 || s != 0) {

         if (s > 0) {
            s--;
            s > 9 ? sec.value = s : sec.value = "0" + s;
         } else if (s == 0) {
            s--;
            sec.value = "59";
         }
         if (s < 0) {
            s = 59;
            if (m > 0) {
               m--;
               m > 9 ? min.value = m : min.value = "0" + m;
            } else {
               m--;
               min.value = "59";
            }
         }
         if (m < 0) {
            m = 59;
            h--;
            h > 9 ? hrs.value = h : hrs.value = "0" + h;
         }

      } else {
         clearInterval(time);
         enabling()
         alert("time!");
      }

      stopBtn.addEventListener("click", (event) => {
         clearInterval(time);
         enabling()
      })



      console.log(h, m, s);

   }

})










function enabling() {
   startBtn.disabled = false;
   hrs.disabled = false;
   min.disabled = false;
   sec.disabled = false;
}


function disabling() {
   startBtn.disabled = true;
   hrs.disabled = true;
   min.disabled = true;
   sec.disabled = true;
}