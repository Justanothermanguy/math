 class math {
  
    distance(x2, x1, y2, y1) {
      return Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
    }
    hypot(leg1, leg2) {
        return Math.sqrt(Math.pow(leg2, 2) + Math.pow(leg1, 2));
    }
    triganleSide(side1, side2) {
        if (side1 < side2) return "Side 2 is NOT allowed to be smaller than side 1";
        return Math.sqrt(Math.pow(side1, 2) - Math.pow(side2, 2))
    }
    degreeToRad(degree) {
        return (degree * (Math.PI / 180));
    }
    radToDegree(rad) {
        return (rad * (180 / Math.PI));
    }
    area(shape, length, width, base1, base2, height, radius1, radius2) {
        switch (shape) {
            case "rectangle" || "square":
                return length * width;
            case "triangle":
                return 0.5 * (base1 * height);
            case "circle":
                return Math.PI * (radius1 ** 2);
            case "trapezoid":
                return 0.5 * ((base1 * base2) * height);
            case "ellipse":
                return Math.PI * (radius1 * radius2);
        }
    }
    naturalLog(argument) {
        return Math.log(argument);
    }
    slope(x2, x1, y2, y1) {
        if (y2 == y1 && x2 == x1) return Infinity;
        else if (x2 == x1) return 0;
        else if (y2 == y1) return Error("UNDEFINED");
        return (y2 - y1 / x2 - x1);
    }
    matrixSolver(matrix, operation, target, strict) {
        if (strict == null || strict == undefined) return Error("ERROR UNDEFINED STRICT TYPE");
        if (typeof matrix != "object") return Error("INVALID MATRIX");
        if (operation == null || operation == undefined) return Error("INVALID OPERATION");
        try {
        for (let current_row = 0; current_row < matrix.length; current_row++) {
            for (let current_column = 0; current_column < matrix[0].length; current_column++) {
                switch (operation) {
                    case "find":
                    if (strict) {
                        if (matrix[current_row][current_column] === target) return {"Type: ": typeof target, "Found": true, "Target: ": target};
                    }
                    else if (!strict) {
                       if(matrix[current_row][current_column] == target) return true;
                    }
                    break;
                    case "fx":
                        let pairs = [];
                        let x = [];
                        let y = [];
                        for (let current_row = 0; current_row < matrix.length; current_row++) {
                            pairs.push(matrix[current_row]);
                            x.push(matrix[current_row][0]);
                            y.push(matrix[current_row][1]);
                        }
                        return {"Pairs: ": pairs, "X coords: ": x, "Y coors: ": y};
                    break;
                }
            }
        }
    }
    catch (error) {
        return Error(error);
        }
        return {"Target: ": target, "Target Found: ": false}
    }
    getPoints(fx, bound) {
        let XYcoords = [];
        if (bound > 1000000) return Error("BOUND TOO HIGH");
        for (let input = 0; input < bound; input++) {
            let output = eval(fx.replace(/x/g, input));
            XYcoords.push([input, output]);
        }
        return XYcoords;
    }
    getNearestPoint(points, current_points) {
        let closest_point;
        let distances = [];
        let count = 0;
        for (let current_row = 0; current_row < points.length; current_row++) {
            for (let current_column = 0; current_column < points[0].length; current_column++) {
                count++;
                let point_distance = Math.sqrt(Math.pow(current_points[1] - points[current_row][1], 2) + Math.pow(current_points[0] - current_row[0], 2));
                distances.push({count: point_distance});
            }
        }
        return distances;
    }
    parabola(equation) {
        if (equation.split(" ").length == 0) return Error("ERROR INVALID EQUATION");
        let quadratic;
        let linear;
        let constant;
        let vertex;
        let roots;
        let y_int;
        let domain = [["-∞"],["∞"]];
        let range;
        let min;
        let max;

        quadratic = equation.split(" ")[0];
        linear = equation.split(" ")[4];
        constant = equation.split(" ")[equation.split(" ").length - 1];
       let vertexX = (-1 * (linear)) / (2 * quadratic);
        vertex = [[vertexX], [eval(equation.replace(/x/g, vertexX))]];
        y_int = constant;
        if (Math.sign(quadratic) == 1) {
            max = false;
            min = true;
            range = [[vertex[1][0]],["∞"]];
        }
        else if (Math.sign(quadratic) == -1) {
            max = true;
            min = false;
            range = [["-∞"], [vertex[1][0]]];
        }
        roots = [[((-1 * (linear)) + Math.sqrt(linear ** 2 - 4 * quadratic * constant)) / (2 * quadratic)],[((-1 * (linear)) - Math.sqrt(linear ** 2 - 4 * quadratic * constant)) / (2 * quadratic)]];
        if (isNaN(roots[0])) {
            roots[0] = "Only 1 root";
        }
         if (isNaN(roots[1])) {
            roots[1] = "Only 1 Root";
        }

        if (isNaN(roots[0]) && isNaN(roots[1])) {
            roots = "No roots";
        }
      
        return {
            QEquation: equation,
            Quadratic_Coe: quadratic,
            Linear_Coe: linear,
            Constant_Coe: constant,
            Vertex_Q: vertex,
            X_Ints: roots,
            Y_Intercept: y_int,
            Domain_Q: domain,
            Range_Q: range,
            Minimum: min,
            Maximum: max
        };
    }
    integral(equation, integration_variable, b, a, accuracy) {
        let constructed_equation = `${a}, ${b}∫ ${equation} d${integration_variable}`;
        let upper_bound = b;
        let lower_bound = a;
        let area = 0;
        // TODO Riemann Sum
        // lim x -> ∞ (0, ∞ Σ f(xi) * Δx)
        // Δx = (b - a) / n
        // xi = a + i * Δx
        // n = 1 / Δx
        // The sum takes the area of an infinite amount of rectangles with the width of Δx and the height of f(xi)
        return {
            Equation: constructed_equation,
        }

    }
}

(function() {
console.log(new math().integral("2 * x + 5", "x", 1, 0, 0.00000001));
})()