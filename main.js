// Custom Cursor Start

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// Custom Cursor End

// Back to Top Button

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 690 || document.documentElement.scrollTop > 690) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// Back to top end

// collapsible start

var coll = document.getElementsByClassName("about-programme-landing-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    }
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}

var coll = document.getElementsByClassName("about-programme-landing-collapsible-solopreneur");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    }
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}

function flipSolopreneur() {
  var element = document.getElementById("down-solopreneur") ;
  element.classList.remove("fa-caret-down")
  var element = document.getElementById("down-solopreneur") ;
  element.classList.toggle("fa-caret-up")
  var element = document.getElementById("down-solopreneur") ;
  element.classList.add("fa-caret-down")
}

function flipEnterprise() {
  var element = document.getElementById("down") ;
  element.classList.remove("fa-caret-down")
  var element = document.getElementById("down") ;
  element.classList.toggle("fa-caret-up")
  var element = document.getElementById("down") ;
  element.classList.add("fa-caret-down")
}

// collapsible end 

// check for empty

var validRegex = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);

function newsletterSubscribe() {
  if (document.getElementById("email-newsletter").value === "")  {
    alert("No email has been filled");
  } else if(document.getElementById("email-newsletter").value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    window.open("newsletter-subscription-successful.html", "_blank")
  } else {
    alert("Invalid Email")
  }
}
 
function toast(){
  setTimeout(function() {
    document.getElementById("custom-toast").style.display = "flex";
  }, 800)
}

function refresh() {
setTimeout(function() {
  document.getElementById("refresh-form").reset();
  document.getElementById("actual-button").innerHTML = "Upload";
  document.getElementById("actual-button").style.color = "lightslategray";
  sessionStorage.setItem("fileEmptyorNot", "");
}, 800)
}

function acceleratorRegister() {

  sessionStorage.setItem("total-Emptiness", 0);

  // name check

  var totalEmptiness = 0;

  if (document.getElementById("accelerator-name-input").value === "") {
    sessionStorage.setItem("name-status", "");
    var totalEmptiness = totalEmptiness + 1;
  } else {
    sessionStorage.setItem("name-status", "gtg");    
  } 

  // mail check

  if(document.getElementById("accelerator-email").value === "") {
      sessionStorage.setItem("email-validation", "");
      var totalEmptiness = totalEmptiness + 1;
    } else if(document.getElementById("accelerator-email").value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      sessionStorage.setItem("email-validation", "valid");
    } else {
      sessionStorage.setItem("email-validation", "invalid");
  }

  // file check
  
  if (sessionStorage.getItem("fileEmptyorNot") != "filled") {
    sessionStorage.setItem("fileEmptyorNot", "");
    var totalEmptiness = totalEmptiness + 1;
  };

  // select check
  
  if(document.getElementById("accelerator-select").selectedIndex <=0) {
    sessionStorage.setItem("location-status", "");
    var totalEmptiness = totalEmptiness + 1;
  } else {
    sessionStorage.setItem("location-status", "gtg");
  };

  if (totalEmptiness === 4) {
    alert("All inputs are empty");
  } else {
    
    if (sessionStorage.getItem("name-status") === "") {
      alert("Name has not been filled");
    } else {
      sessionStorage.setItem("name-status", "gtg");
    }

    if (sessionStorage.getItem("email-validation") === "") {
      alert("Email has not been filled");
    } else if (sessionStorage.getItem("email-validation") === "valid"){
      sessionStorage.setItem("email-status", "gtg");
    } else {
      alert("Email is invalid");
    }
    
    if (sessionStorage.getItem("fileEmptyorNot") !=  "filled") {
      alert("Company Overview has not been uploaded");  
    } else {
      sessionStorage.setItem("file-status", "gtg");
    }
    
    if (sessionStorage.getItem("location-status") != "gtg") {
      alert("Location has not been selected");
    }
  }

  if(sessionStorage.getItem("name-status") === "gtg" && sessionStorage.getItem("email-status") === "gtg" && sessionStorage.getItem("file-status") === "gtg" && sessionStorage.getItem("location-status") === "gtg") {
    toast();
    refresh();
  }
}

function hide() {
document.getElementById("custom-toast").style.display = "none";
}

// start of free call reg empty check

function fcCheck() {

  totalEmptinessFC = 0;

  if (document.getElementById("free-call-name").value === "") {
    sessionStorage.setItem("fc-name-status", "");
    var totalEmptinessFC = totalEmptinessFC + 1;
  } else {
    sessionStorage.setItem("fc-name-status", "gtg");    
  } 
  
  if(document.getElementById("free-call-email").value === "") {
    sessionStorage.setItem("fc-email-validation", "");
    var totalEmptinessFC = totalEmptinessFC + 1;
  } else if(document.getElementById("free-call-email").value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    sessionStorage.setItem("fc-email-validation", "valid");
  } else {
    sessionStorage.setItem("fc-email-validation", "invalid");
  }
  
  if(document.getElementById("free-call-select").selectedIndex <=0) {
    sessionStorage.setItem("fc-select-status", "");
    var totalEmptinessFC = totalEmptinessFC + 1;
  } else {
    sessionStorage.setItem("fc-select-status", "gtg");
  };

  if (totalEmptinessFC === 3) {
    alert("All inputs are empty");
  } else {
    if (sessionStorage.getItem("fc-name-status") === "") {
      alert("Name has not been filled");
    } else {
      sessionStorage.setItem("fc-name-status", "gtg");
    }
  
    if (sessionStorage.getItem("fc-email-validation") === "") {
      alert("Email has not been filled");
    } else if (sessionStorage.getItem("fc-email-validation") === "valid"){
      sessionStorage.setItem("fc-email-status", "gtg");
    } else {
      alert("Email is invalid");
    }
    
    if (sessionStorage.getItem("fc-select-status") != "gtg") {
      alert("Timezone has not been selected");
    }
  }
  
  if(sessionStorage.getItem("fc-name-status") === "gtg" && sessionStorage.getItem("fc-email-validation") === "valid" && sessionStorage.getItem("fc-select-status") === "gtg") {
    toast();
    refresh();
  }
};

// start of blog scroll

document.addEventListener('scroll', updateProgressBar);

function updateProgressBar() {
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';

  document.querySelector("#reading-progress").style.setProperty('--progress', scrollPercent);

  var scrollCheck = parseFloat(scrollPercent);

  if (scrollCheck > 60) {

    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + 13 + '%';
    document.querySelector("#reading-progress").style.setProperty('--progress', scrollPercent);
  }
};

document.getElementById("apply-job").addEventListener("click", function() {
  if (document.getElementById("fname").value === "") {
    sessionStorage.setItem("fnamestatus", "")
  } else {
    sessionStorage.setItem("fnamestatus", "gtg")
  };
  if (document.getElementById("lname").value === "") {
    sessionStorage.setItem("lnamestatus", "")
  } else {
    sessionStorage.setItem("lnamestatus", "gtg")
  };
  if (document.getElementById("phone").value === "") {
    sessionStorage.setItem("phonestatus", "")
  } else if (document.getElementById("phone").value.match(/^(09|\+?959)7([5-9])\d{7}$/) || document.getElementById("phone").value.match(/^(09|\+?959)9(5|7|6)\d{7}$/) || document.getElementById("phone").value.match(/^(09|\+?959)(5\d{6}|4\d{7,8}|2\d{6,8}|3\d{7,8}|6\d{6}|8\d{6}|7\d{7}|9(0|1|9)\d{5,6}|2[0-4]\d{5}|5[0-6]\d{5}|8[13-7]\d{5}|3[0-369]\d{6}|34\d{7}|4[1379]\d{6}|73\d{6}|91\d{6}|25\d{7}|26[0-5]\d{6}|40[0-4]\d{6}|42\d{7}|45\d{7}|89[6789]\d{6}|)$/)) {
    sessionStorage.setItem("phonestatus", "gtg");
  } else {
    sessionStorage.setItem("phonestatus", "error");
  };

  if (document.getElementById("school").value === "") {
    sessionStorage.setItem("schoolstatus", "");
  } else {
    sessionStorage.setItem("schoolstatus", "gtg")
  };

  if (document.getElementById("emailapply").value === "") {
    sessionStorage.setItem("emailstatus", "");
  } else if(document.getElementById("emailapply").value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    sessionStorage.setItem("emailstatus", "gtg")
  } else {
    sessionStorage.setItem("emailstats", "error")
  };


  if (document.getElementById("degree").value === "") {
    sessionStorage.setItem("degreestatus", "");
  } else {
    sessionStorage.setItem("degreestatus", "gtg")
  };

  if (document.getElementById("discipline").value === "") {
    sessionStorage.setItem("disciplinestatus", "");
  } else {
    sessionStorage.setItem("disciplinestatus", "gtg")
  };

  if (document.getElementById("linkedin").value === "") {
    sessionStorage.setItem("linkedinstatus", "");
  } else {
    sessionStorage.setItem("linkedinstatus", "gtg")
  };

  if (sessionStorage.getItem("fnamestatus") === "" && sessionStorage.getItem("lnamestatus") === "" && sessionStorage.getItem("phonestatus") === "" && sessionStorage.getItem("emailstatus") === "" && sessionStorage.getItem("linkedinstatus") === "" && sessionStorage.getItem("resume") === "") {
    alert("All inputs are empty!!")
  } else {
    if (sessionStorage.getItem("phonestatus") === "error") {
      alert("Invalid phone number")
    };

    if (sessionStorage.getItem("phonestatus") === "") {
      alert("Phone number is empty");
    };

    if (sessionStorage.getItem("emailstatus") === "") {
      alert("Email is empty");
    }

    if(sessionStorage.getItem("emailstatus") === "error") {
      alert("Invalid email.")
    };
  
    if (sessionStorage.getItem("fnamestatus") === "") {
      alert("First name is empty");
    };
  
    if (sessionStorage.getItem("lnamestatus") === ""){
      alert("Last name is empty");
    };
  
    if (sessionStorage.getItem("resume") === "") {
      alert("Resume is empty");
    };
  
    if (sessionStorage.getItem("linkedinstatus") === "") {
      alert("LinkedIn is empty");
    }
  };

  if (sessionStorage.getItem("fnamestatus") === "gtg" && sessionStorage.getItem("lnamestatus") === "gtg" && sessionStorage.getItem("phonestatus") === "gtg" && sessionStorage.getItem("linkedinstatus") === "gtg" && sessionStorage.getItem("emailstatus") === "gtg" && sessionStorage.getItem("resume") === "gtg")
  {
    alert("Your application has been submitted. Please check your email.");
    location.reload();
  }
});

// start of contact emptiness check

function contactCheck() {
  totalEmptinessC = 0;

  if (document.getElementById("c-name").value === "") {
    sessionStorage.setItem("c-name-status", "");
    var totalEmptinessC = totalEmptinessC + 1;
  } else {
    sessionStorage.setItem("c-name-status", "gtg");    
  } 

  if (document.getElementById("c-message").value === "") {
    sessionStorage.setItem("c-message-status", "");
    var totalEmptinessC = totalEmptinessC + 1;
  } else {
    sessionStorage.setItem("c-message-status", "gtg");    
  } 

  if(document.getElementById("c-phone").value === "") {
    sessionStorage.setItem("c-phone-validation", "");
    var totalEmptinessC = totalEmptinessC + 1;
  } else if(document.getElementById("c-phone").value.match(/^(09|\+?959)7([5-9])\d{7}$/) || document.getElementById("c-phone").value.match(/^(09|\+?959)9(5|7|6)\d{7}$/) || document.getElementById("c-phone").value.match(/^(09|\+?959)(5\d{6}|4\d{7,8}|2\d{6,8}|3\d{7,8}|6\d{6}|8\d{6}|7\d{7}|9(0|1|9)\d{5,6}|2[0-4]\d{5}|5[0-6]\d{5}|8[13-7]\d{5}|3[0-369]\d{6}|34\d{7}|4[1379]\d{6}|73\d{6}|91\d{6}|25\d{7}|26[0-5]\d{6}|40[0-4]\d{6}|42\d{7}|45\d{7}|89[6789]\d{6}|)$/)) {
    sessionStorage.setItem("c-phone-validation", "valid");
  } else {
    sessionStorage.setItem("c-phone-validation", "invalid");
  }


  if(document.getElementById("c-email").value === "") {
    sessionStorage.setItem("c-email-validation", "");
    var totalEmptinessC = totalEmptinessC + 1;
  } else if(document.getElementById("c-email").value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    sessionStorage.setItem("c-email-validation", "valid");
  } else {
    sessionStorage.setItem("c-email-validation", "invalid");
  }

  if (document.getElementById("c-subject").value === "") {
    sessionStorage.setItem("c-subject-status", "");
    var totalEmptinessC = totalEmptinessC + 1;
  } else {
    sessionStorage.setItem("c-subject-status", "gtg");    
  } 

  if (totalEmptinessC === 5) {
    alert("All inputs are empty");
  } else {
    if (sessionStorage.getItem("c-name-status") === "") {
      alert("Name has not been filled");
    } else {
      sessionStorage.setItem("c-name-status", "gtg");
    }
  
    if (sessionStorage.getItem("c-message-status") === "") {
      alert("Message has not been filled");
    } else {
      sessionStorage.setItem("c-message-status", "gtg");
    }

    if (sessionStorage.getItem("c-email-validation") === "") {
      alert("Email has not been filled");
    } else if (sessionStorage.getItem("c-email-validation") === "valid"){
      sessionStorage.setItem("c-email-status", "gtg");
    } else {
      alert("Email is invalid");
    }

    if (sessionStorage.getItem("c-phone-validation") === "") {
      alert("Phone number has not been filled");
    } else if (sessionStorage.getItem("c-phone-validation") === "valid"){
      sessionStorage.setItem("c-phone-status", "gtg");
    } else {
      alert("Phone number is invalid");
    }
    
    if (sessionStorage.getItem("c-subject-status") === "") {
      alert("Subject has not been filled");
    } else {
      sessionStorage.setItem("c-subject-status", "gtg");
    }

  }
  if (sessionStorage.getItem("c-name-status") === "gtg" && sessionStorage.getItem("c-email-validation") === "valid" && sessionStorage.getItem("c-phone-validation") === "valid" && sessionStorage.getItem("c-subject-status") === "gtg" && sessionStorage.getItem("c-message-status") === "gtg"){
      window.open("message-sent.html", "_blank")
  }
};

document.getElementById("fa-minus-minus").addEventListener("click", function() {
  document.getElementById("order-summary-item").style.display = "none";
});

// toast end




// tooltip start

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// tooltip end

// fa hide
