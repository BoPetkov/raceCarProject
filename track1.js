function Track1(element) {
    this.canvas = element;
    var ctx = this.canvas.getContext("2d");
    var self = this;

    this.speed = new Speed(0.5);


    // set starting values
    var fps = 60;
    var percent = 0


    this.animate = function () {

        // set the animation position (0-100)
        percent += self.speed.speed;
        if (percent < 0) {
            percent = 0;
            // direction = 1;
        };
        if (percent > 100) {
            percent = 1;
            self.lapFinished();
            // direction = 1;
        };

        self.draw(percent);

        // request another frame
        setTimeout(function () {
            requestAnimationFrame(self.animate);
        }, 1000 / fps);
    }

    this.lapFinished = function () {

    }

    // draw the current frame based on sliderValue
    self.draw = function (sliderValue) {

        // redraw path
        ctx.fillRect(0, 0, self.canvas.width, self.canvas.height);
        ctx.lineWidth = 70;

        ctx.beginPath();
        ctx.moveTo(300, 100);
        ctx.lineTo(800, 100);
        ctx.strokeStyle = '#2e3543';
        // ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        // ctx.setLineDash([5, 15]);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(800, 100);
        ctx.quadraticCurveTo(1000, 250, 800, 400);
        // ctx.strokeStyle = 'green';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(800, 400);
        ctx.lineTo(300, 400);
        // ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(300, 400);
        ctx.quadraticCurveTo(100, 250, 300, 100);
        // ctx.strokeStyle = 'gold';
        ctx.stroke();


        var xy = self.getPosition(sliderValue);
        var rotation = self.getRotation(sliderValue);

        self.drawImage(xy,rotation);
    }

    this.getPosition = function (sliderValue) {

        // draw the tracking rectangle
        var xy;

        if (sliderValue < 25) {
            var percent = sliderValue / 24;
            xy = self.getLineXYatPercent({
                x: 300,
                y: 100
            }, {
                    x: 780,
                    y: 100
                }, percent);
        } else if (sliderValue < 50) {
            var percent = (sliderValue - 25) / 24
            xy = self.getQuadraticBezierXYatPercent({
                x: 800,
                y: 100
            }, {
                    x: 1000,
                    y: 250
                }, {
                    x: 810,
                    y: 390
                }, percent);
        } else if (sliderValue < 75) {
            var percent = (sliderValue - 50) / 24
            xy = self.getLineXYatPercent({
                x: 790,
                y: 400
            }, {
                    x: 320,
                    y: 400
                }, percent);
        } else {
            var percent = (sliderValue - 75) / 25
            xy = self.getQuadraticBezierXYatPercent({
                x: 300,
                y: 400
            }, {
                    x: 100,
                    y: 250
                }, {
                    x: 320,
                    y: 120
                }, percent);
        }

        return xy;

    }

    this.getRotation = function (sliderValue) {
        var oldXY = self.getPosition(sliderValue - self.speed.speed);
        var newXY = self.getPosition(sliderValue);
        var vector1 = {
            x: newXY.x - oldXY.x,
            y: newXY.y - oldXY.y
        }

        var angle = Math.atan2(vector1.y, vector1.x) - Math.atan2(0, 1);

        return angle;
    }

    // draw tracking rect at xy
    this.drawImage = function (point, rotation) {
        var imageOb = new Image();
        imageOb.src = "./images/car.png";
        ctx.beginPath();
        //ctx.rect(point.x - 13, point.y - 8, 25, 15);
        //ctx.fill();
        ctx.save();
        ctx.translate(point.x - 13, point.y - 8);
        ctx.rotate(rotation);
        ctx.drawImage(imageOb, 0, 0);
        ctx.restore();
        ctx.fillStyle = "#23A856";
        ctx.stroke();
    }

    // draw tracking dot at xy
    this.drawDot = function (point, color) {
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.fillStyle = "#44891A";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
        ctx
        ();
        ctx.fill();
        ctx.stroke();
    }

    // line: percent is 0-1
    this.getLineXYatPercent = function (startPt, endPt, percent) {
        var dx = endPt.x - startPt.x;
        var dy = endPt.y - startPt.y;
        var X = startPt.x + dx * percent;
        var Y = startPt.y + dy * percent;
        return ({
            x: X,
            y: Y
        });
    }

    // quadratic bezier: percent is 0-1
    this.getQuadraticBezierXYatPercent = function (startPt, controlPt, endPt, percent) {
        var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
        var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
        return ({
            x: x,
            y: y
        });
    }

    // cubic bezier percent is 0-1
    this.getCubicBezierXYatPercent = function (startPt, controlPt1, controlPt2, endPt, percent) {
        var x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
        var y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
        return ({
            x: x,
            y: y
        });
    }

    // cubic helper formula at percent distance
    this.CubicN = function (pct, a, b, c, d) {
        var t2 = pct * pct;
        var t3 = t2 * pct;
        return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
    }

}