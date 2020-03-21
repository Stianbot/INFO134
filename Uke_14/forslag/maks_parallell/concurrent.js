var url = "http://158.39.77.143/addition/"

window.onload = function() {
    reporter = document.getElementById("reporter");
    thelist = new ConcurrentAddition(reporter);
}

function ConcurrentAddition(reporter) {
    this.tasks = [];
    this.reporter = reporter;
}

ConcurrentAddition.prototype.add = function(number) {
    this.tasks.push(number);
    if (this.tasks.length === 1) {
	this.reporter.innerHTML = "&Sigma; = " + this.tasks[0];
	return;
    }
    var x0 = this.tasks.pop();
    var x1 = this.tasks.pop();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    (function (self) {
	xhr.onreadystatechange = function() {
	    if(xhr.readyState === 4 && xhr.status === 200) {
		var resObj = JSON.parse(xhr.responseText);
		var res = resObj[resObj["equation"]];
		self.add(res);
	    }
	};
    })(this);

    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.send(JSON.stringify({
	"first": x0,
	"second": x1
    }));
    
}

function calculate() {
    var inpElt = document.getElementById("numbers");
    var numsStrs = inpElt.value.split(",");
    thelist.tasks = [0];
    for(var i in numsStrs) {
	thelist.add(Number(numsStrs[i]));
    }
}
