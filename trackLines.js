function DrawLines() {
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
        var x = this.CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
        var y = this.CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
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