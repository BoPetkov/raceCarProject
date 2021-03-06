function Track3(element) {
    
    this.canvas = element;
    var ctx = this.canvas.getContext("2d");
    var self = this;
    this.speed = new Speed(0.5);
    this.trackLines = new DrawLines();

    // set starting values
    var fps = 60;
    var percent = 0

    this.animate = function () {

        // set the animation position (0-100)
        percent += self.speed.speed;
        if (percent < 0) {
            percent = 0;
        };
        if (percent > 100) {
            percent = 1;
            self.lapFinished();
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
        ctx.moveTo( 215, 295 );
        ctx.bezierCurveTo( 229, 91, 398, 59, 598, 67 );
        ctx.strokeStyle = '#2e3543';
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo( 597, 67 );
        ctx.bezierCurveTo( 744, 73, 572, 558, 756, 292 );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo( 756, 292 );
        ctx.bezierCurveTo( 917, 85, 886, 613, 542, 461  );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo( 541, 462 );
        ctx.bezierCurveTo(  415, 190, 169, 548, 216, 292 );
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
            xy = self.trackLines.getCubicBezierXYatPercent({
                x: 215,
                y: 295
            }, {
                x: 229,
                y: 91
            }, {
                x: 398,
                y: 59
            }, {
                x: 598,
                y: 67
            }, percent);
        } else if (sliderValue < 50) {
            var percent = (sliderValue - 25) / 24
            xy = self.trackLines.getCubicBezierXYatPercent({
                x: 597,
                y: 67
            }, {
                x: 744,
                y: 73
            }, {
                x: 572,
                y: 558
            }, {
                x: 756,
                y: 292
            }, percent);
        } else if (sliderValue < 75) {
            var percent = (sliderValue - 50) / 24
            xy = self.trackLines.getCubicBezierXYatPercent({
                x: 756,
                y: 292
            }, {
                x: 917,
                y: 85
            }, {
                x: 886,
                y: 613
            }, {
                x: 542,
                y: 461
            }, percent);
        } else {
            var percent = (sliderValue - 75) / 25
            xy = self.trackLines.getCubicBezierXYatPercent({
                x: 541,
                y: 462
            }, {
                x: 415,
                y: 190
            }, {
                x: 169,
                y: 548
            }, {
                x: 216,
                y: 292
            }, percent);
        }

        return xy;
    }

     // car rotation
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
}