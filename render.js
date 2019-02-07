function PageRenderer() {

    var coins = new Coins();
    var enginelvl = new Engine();
    var tireslvl = new Tires();
    var aerodynamiclvl = new Aerodynamics();
    var fuellvl = new Fuel();
    var speedCounter = 1;

    var buttonDisabledCss = {
        "border-radius": "6px",
        "border": "1px solid #ffaa22",
        "display": "inline-block",
        "cursor": "pointer",
        "color": "#333333",
        "font-family": "Arial",
        "font-size": "15px",
        "font-weight": "bold",
        "padding": "6px 24px",
        "text-decoration": "none",
        "text-shadow": "0px 1px 0px #ffee66",
        "background-color": "#ffec64",
    }

    var buttonEnabledCss = {
        "border-radius": "6px",
        "border": "1px solid #ffaa22",
        "display": "inline-block",
        "cursor": "pointer",
        "color": "#333333",
        "font-family": "Arial",
        "font-size": "15px",
        "font-weight": "bold",
        "padding": "6px 24px",
        "text-decoration": "none",
        "text-shadow": "0px 1px 0px #ffee66",
        "background-color": "#ffe421",
    }

    var textStyleHead = {
        "font-family": "Lucida Console",
        "font-size": "25px",
        "letter-spacing": "1px",
        "word-spacing": "3px",
        "color": "#FFEC12",
        "font-weight": "700",
        "text-decoration": "none",
        "font-style": "normal",
        "font-variant": "normal",
        "text-transform": "none",
    }

    var textStyle = {
        "font-family": "Lucida Console",
        "font-size": "15px",
        "letter-spacing": "0.2px",
        "word-spacing": "3px",
        "color": "#000",
        "font-weight": "700",
        "text-decoration": "none",
        "font-style": "normal",
        "font-variant": "normal",
        "text-transform": "none",
    }

    this.renderAll = function () {
        var container = $("#main-container").css({ "display": "flex", "width": "80%" });

        container.append(renderTop)
            .append(renderRight)
            .append(renderCenter);
    }

    this.renderTop = function () {
        var menu = $("<div>").css({
            "display": "flex", "position": "absolute", "top": "0", "height": "50px",
            "width": "100%", "background-color": "#000"
        });

        var coin = $("<span>").attr("id", "coin").html(" Coins " + coins.coins).css(textStyleHead);
        menu.append(coin);
        return menu;
    }

    this.renderRight = function () {
        var upgrades = $("<div>").css({
            "display": "grid", "grid-template-rows": "repeat(4, 1fr)", "grid-template-columns": "1fr",
            "position": "absolute", "marginTop": "0px", "right": "0px", "width": "20%", "background-color": "#57EF91",
            "height": "640px"
        });

        var engine = $("<div>").css({ "display": "flex", "flex-direction": "column" });
        var engineName = $("<span>").attr("id", "engineName").html("Engine LEVEL " + enginelvl.lvlEngine + " Cost " + enginelvl.engineCost).css(textStyle);
        var engineImage = $("<img>").attr("src", "images/engine.jpg").css({ "width": "200px", "height": "100px", "align-self": "center" });
        var engineButton = $("<button>").attr("id", "engineButton").html("UpGrade Engine").prop("disabled", true).css(buttonDisabledCss);

        engine.append(engineName)
            .append(engineImage)
            .append(engineButton);

        var aerodynamic = $("<div>");
        var aerodynamicName = $("<span>").attr("id", "aerodynamicName").html("Aerodynamic LEVEL " + aerodynamiclvl.lvlAerodynamics + " Cost " + aerodynamiclvl.aerodynamicsCost).css(textStyle);
        var aerodynamicImage = $("<img>").attr("src", "images/aerodynamic.png").css({ "width": "200px", "height": "100px", "align-self": "center" });
        var aerodynamicButton = $("<button>").attr("id", "aerodinamicButton").html("UpGrade Aerodynamics").prop("disabled", true).css(buttonDisabledCss);

        engine.append(aerodynamicName)
            .append(aerodynamicImage)
            .append(aerodynamicButton);

        var tire = $("<div>");
        var tireName = $("<span>").attr("id", "tireName").html("TIRES LEVEL " + tireslvl.lvlTire + " Cost " + tireslvl.tireCost).css(textStyle);
        var tireImage = $("<img>").attr("src", "images/tire.jpg").css({ "width": "200px", "height": "100px", "align-self": "center" });
        var tireButton = $("<button>").attr("id", "tireButton").html("UpGrade Tire").prop("disabled", true).css(buttonDisabledCss);

        engine.append(tireName)
            .append(tireImage)
            .append(tireButton);

        var fuel = $("<div>");
        var fuelName = $("<span>").attr("id", "fuelName").html("Fuel LEVEL " + fuellvl.lvlFuel + " Cost " + fuellvl.fuelCost).css(textStyle);
        var fuelImage = $("<img>").attr("src", "images/fuel.jpg").css({ "width": "200px", "height": "100px", "align-self": "center" });
        var fuelButton = $("<button>").attr("id", "fuelButton").html("UpGrade Fuel").prop("disabled", true).css(buttonDisabledCss);

        engine.append(fuelName)
            .append(fuelImage)
            .append(fuelButton);

        upgrades.append(engine)
            .append(aerodynamic)
            .append(tire)
            .append(fuel);

        return upgrades;
    }


    this.renderCenter = function () {

        var mainCenter = $("<div>").css({ "background": "rgba(35, 249, 2, 0.5)", "marginTop": "50px", "display": "flex", "flex-direction": "column", "width": "1075", "height": "600", "justify-content": "center" }).html("");
        
        var startScreen = $("<span>").html("Choose Track").css({"align-self": "center", "font-size": "40px", "padding-top": "100px"});
        var select = $("<div>").css({ "marginTop": "50px", "display": "flex", "flex-direction": "row", "width": "1075", "height": "600", "justify-content": "center" }).html("");

        var track1 = $("<img>").attr("src", "images/racetrack1.png").css({ "margin-right": "10px", "width": "250px", "height": "150px", "align-self": "center" }).click(function () {

            var raceTrack = $("<canvas>");
            raceTrack[0].height = 600;
            raceTrack[0].width = 1075;

            var raceAnimation = new Track1(raceTrack[0]);
            raceAnimation.lapFinished = function () {
                coins.gainCoins();
                $("#coin").html(" Coins " + coins.coins);


                if (coins.coins > enginelvl.engineCost) {
                    $("#engineButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > aerodynamiclvl.aerodynamicsCost) {
                    $("#aerodinamicButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > tireslvl.tireCost) {
                    $("#tireButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > fuellvl.fuelCost) {
                    $("#fuelButton").prop("disabled", false).css(buttonEnabledCss);
                }

                if (enginelvl.lvlEngine > speedCounter && aerodynamiclvl.lvlAerodynamics > speedCounter && tireslvl.lvlTire > speedCounter && fuellvl.lvlFuel > speedCounter) {
                    raceAnimation.speed.carSpeed();
                    speedCounter++;
                }
            }

            $("#engineButton").click(function () {
                coins.spendCoins(enginelvl.engineCost);
                $("#coin").html(" Coins " + coins.coins);
                enginelvl.engineLevel();
                $("#engineName").html("Engine LEVEL " + enginelvl.lvlEngine + " Cost " + enginelvl.engineCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#aerodinamicButton").click(function () {
                coins.spendCoins(aerodynamiclvl.aerodynamicsCost);
                $("#coin").html(" Coins " + coins.coins);
                aerodynamiclvl.aerodynamicsLevel();
                $("#aerodynamicName").html("Aerodynamic LEVEL " + aerodynamiclvl.lvlAerodynamics + " Cost " + aerodynamiclvl.aerodynamicsCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#tireButton").click(function () {
                coins.spendCoins(tireslvl.tireCost);
                $("#coin").html(" Coins " + coins.coins);
                tireslvl.tireLevel();
                $("#tireName").html("TIRES LEVEL " + tireslvl.lvlTire + " Cost " + tireslvl.tireCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#fuelButton").click(function () {
                coins.spendCoins(fuellvl.fuelCost);
                $("#coin").html(" Coins " + coins.coins);
                fuellvl.fuelLevel();
                $("#fuelName").html("Fuel LEVEL " + fuellvl.lvlFuel + " Cost " + fuellvl.fuelCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });

            raceAnimation.animate();

            mainCenter.append(raceTrack);

            select.remove();
            startScreen.remove();

        });

        var track2 = $("<img>").attr("src", "images/racetrack2.png").css({ "margin-right": "10px", "width": "250px", "height": "150px", "align-self": "center" }).click(function () {

            var raceTrack = $("<canvas>");
            raceTrack[0].height = 600;
            raceTrack[0].width = 1075;

            var raceAnimation = new Track2(raceTrack[0]);
            raceAnimation.lapFinished = function () {
                coins.gainCoins();
                $("#coin").html(" Coins " + coins.coins);


                if (coins.coins > enginelvl.engineCost) {
                    $("#engineButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > aerodynamiclvl.aerodynamicsCost) {
                    $("#aerodinamicButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > tireslvl.tireCost) {
                    $("#tireButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > fuellvl.fuelCost) {
                    $("#fuelButton").prop("disabled", false).css(buttonEnabledCss);
                }

                if (enginelvl.lvlEngine > speedCounter && aerodynamiclvl.lvlAerodynamics > speedCounter && tireslvl.lvlTire > speedCounter && fuellvl.lvlFuel > speedCounter) {
                    raceAnimation.speed.carSpeed();
                    speedCounter++;
                }
            }

            $("#engineButton").click(function () {
                coins.spendCoins(enginelvl.engineCost);
                $("#coin").html(" Coins " + coins.coins);
                enginelvl.engineLevel();
                $("#engineName").html("Engine LEVEL " + enginelvl.lvlEngine + " Cost " + enginelvl.engineCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#aerodinamicButton").click(function () {
                coins.spendCoins(aerodynamiclvl.aerodynamicsCost);
                $("#coin").html(" Coins " + coins.coins);
                aerodynamiclvl.aerodynamicsLevel();
                $("#aerodynamicName").html("Aerodynamic LEVEL " + aerodynamiclvl.lvlAerodynamics + " Cost " + aerodynamiclvl.aerodynamicsCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#tireButton").click(function () {
                coins.spendCoins(tireslvl.tireCost);
                $("#coin").html(" Coins " + coins.coins);
                tireslvl.tireLevel();
                $("#tireName").html("TIRES LEVEL " + tireslvl.lvlTire + " Cost " + tireslvl.tireCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#fuelButton").click(function () {
                coins.spendCoins(fuellvl.fuelCost);
                $("#coin").html(" Coins " + coins.coins);
                fuellvl.fuelLevel();
                $("#fuelName").html("Fuel LEVEL " + fuellvl.lvlFuel + " Cost " + fuellvl.fuelCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });

            raceAnimation.animate();

            mainCenter.append(raceTrack);

            select.remove();
            startScreen.remove();

        });

        var track3 = $("<img>").attr("src", "images/racetrack3.png").css({ "margin-right": "10px", "width": "250px", "height": "150px", "align-self": "center" }).click(function () {

            var raceTrack = $("<canvas>");
            raceTrack[0].height = 600;
            raceTrack[0].width = 1075;

            var raceAnimation = new Track3(raceTrack[0]);
            raceAnimation.lapFinished = function () {
                coins.gainCoins();
                $("#coin").html(" Coins " + coins.coins);


                if (coins.coins > enginelvl.engineCost) {
                    $("#engineButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > aerodynamiclvl.aerodynamicsCost) {
                    $("#aerodinamicButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > tireslvl.tireCost) {
                    $("#tireButton").prop("disabled", false).css(buttonEnabledCss);
                }
                if (coins.coins > fuellvl.fuelCost) {
                    $("#fuelButton").prop("disabled", false).css(buttonEnabledCss);
                }

                if (enginelvl.lvlEngine > speedCounter && aerodynamiclvl.lvlAerodynamics > speedCounter && tireslvl.lvlTire > speedCounter && fuellvl.lvlFuel > speedCounter) {
                    raceAnimation.speed.carSpeed();
                    speedCounter++;
                }
            }

            $("#engineButton").click(function () {
                coins.spendCoins(enginelvl.engineCost);
                $("#coin").html(" Coins " + coins.coins);
                enginelvl.engineLevel();
                $("#engineName").html("Engine LEVEL " + enginelvl.lvlEngine + " Cost " + enginelvl.engineCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#aerodinamicButton").click(function () {
                coins.spendCoins(aerodynamiclvl.aerodynamicsCost);
                $("#coin").html(" Coins " + coins.coins);
                aerodynamiclvl.aerodynamicsLevel();
                $("#aerodynamicName").html("Aerodynamic LEVEL " + aerodynamiclvl.lvlAerodynamics + " Cost " + aerodynamiclvl.aerodynamicsCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#tireButton").click(function () {
                coins.spendCoins(tireslvl.tireCost);
                $("#coin").html(" Coins " + coins.coins);
                tireslvl.tireLevel();
                $("#tireName").html("TIRES LEVEL " + tireslvl.lvlTire + " Cost " + tireslvl.tireCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });
            $("#fuelButton").click(function () {
                coins.spendCoins(fuellvl.fuelCost);
                $("#coin").html(" Coins " + coins.coins);
                fuellvl.fuelLevel();
                $("#fuelName").html("Fuel LEVEL " + fuellvl.lvlFuel + " Cost " + fuellvl.fuelCost);
                $("#engineButton").prop("disabled", true).css(buttonDisabledCss);
                $("#aerodinamicButton").prop("disabled", true).css(buttonDisabledCss);
                $("#tireButton").prop("disabled", true).css(buttonDisabledCss);
                $("#fuelButton").prop("disabled", true).css(buttonDisabledCss);
            });

            raceAnimation.animate();

            mainCenter.append(raceTrack);

            select.remove();
            startScreen.remove();

        });

        select.append(track1).append(track2).append(track3);

        mainCenter.append(startScreen).append(select);

        return mainCenter;
    }

}

PageRenderer();