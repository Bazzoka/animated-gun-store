from flask import Flask,render_template
gun_store=Flask(__name__)
@gun_store.route("/")
def project():
        return render_template("index.html")


@gun_store.route("/products")
def products():
    return render_template("products.html")
@gun_store.route("/products1")
def products1():
    return render_template("Handguns.html")

@gun_store.route("/products2")
def products2():
    return render_template("crossbows.html")

@gun_store.route("/products3")
def products3():
    return render_template("Machine Guns.html")

@gun_store.route("/products4")
def products4():
    return render_template("Rifles.html")
@gun_store.route("/products5")
def products5():
    return render_template("RPG.html")
@gun_store.route("/products6")
def products6():
    return render_template("Shotguns.html")
@gun_store.route("/products7")
def products7():
    return render_template("Sniper Rifles.html")
@gun_store.route("/products8")
def products8():
    return render_template("submachine.html")

@gun_store.route("/forbidden")
def forbidden():
    return render_template("forbidden.html")


@gun_store.route("/about")
def about():
    return render_template("about-page (1).html")


@gun_store.route("/checkout")
def checkout():
    return render_template("/checkout.html")


if __name__=="__main__":
    gun_store.run(debug=True,port=8000)



