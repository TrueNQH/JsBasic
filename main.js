function checkGrade() {
	var score = document.getElementById("score").value; //DOM
	// thực hiện logic ở đây
	/* 10	<= 	score <= 8 	 : diem gioi 
	 	8	<	score <= 6.5 : diem kha
	 	6.5 < 	score <= 5	 : diem dat
		0 	<=	score <  5	 : diem chua dat
	 */
  }



  function renderResult(result) {
	document.getElementById("result").textContent = result
  }
  