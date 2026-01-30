const shapes2D = [
{
name:"Triangle",
image:"css-triangle",
formulas:[
"Area = ½ × base × height",
"Perimeter = a + b + c",
"Heron’s Formula: Area = √[s(s−a)(s−b)(s−c)]"
],
desc:[
"A triangle is a polygon with three sides and three angles.",
"The sum of interior angles is always 180°.",
"Triangles are the strongest shape used in structures.",
"They are classified as equilateral, isosceles, or scalene.",
"Also classified by angles: acute, right, or obtuse."
]
},
{
name:"Square",
image:"css-square",
formulas:[
"Area = side²",
"Perimeter = 4 × side",
"Diagonal = side√2"
],
desc:[
"A square has four equal sides and four right angles.",
"It is a regular quadrilateral.",
"Its diagonals are equal and bisect each other at 90°.",
"It has 4 lines of symmetry.",
"Commonly seen in floor tiles and boards."
]
},
{
name:"Rectangle",
image:"css-rectangle",
formulas:[
"Area = length × width",
"Perimeter = 2(l + w)",
"Diagonal = √(l² + w²)"
],
desc:[
"A rectangle has opposite sides equal and parallel.",
"All angles are 90 degrees.",
"Its diagonals are equal in length.",
"It has 2 lines of symmetry.",
"Used in screens, books, and doors."
]
},
{
name:"Circle",
image:"css-circle",
formulas:[
"Area = πr²",
"Circumference = 2πr",
"Diameter = 2r"
],
desc:[
"A circle is a perfectly round shape.",
"It has no sides or vertices.",
"Every point on the boundary is equally distant from the center.",
"Used in wheels and coins.",
"π (pi) is approximately 3.1416."
]
},
{
name:"Parallelogram",
image:"css-parallelogram",
formulas:[
"Area = base × height",
"Perimeter = 2(a + b)"
],
desc:[
"A parallelogram has opposite sides parallel and equal.",
"Opposite angles are equal.",
"Diagonals bisect each other.",
"It looks like a slanted rectangle.",
"Used in tiling and design."
]
},
{
name:"Rhombus",
image:"css-rhombus",
formulas:[
"Area = ½ × d₁ × d₂",
"Perimeter = 4 × side"
],
desc:[
"A rhombus has four equal sides.",
"Opposite angles are equal.",
"Diagonals bisect each other at right angles.",
"It looks like a diamond shape.",
"It has 2 lines of symmetry."
]
},
{
name:"Trapezium",
image:"css-trapezium",
formulas:[
"Area = ½ × (a + b) × height",
"Perimeter = sum of all sides"
],
desc:[
"A trapezium has one pair of parallel sides.",
"Also called a trapezoid in some countries.",
"Angles and sides may be unequal.",
"It is a quadrilateral.",
"Seen in bridge designs."
]
},
{
name:"Kite",
image:"css-kite",
formulas:[
"Area = ½ × d₁ × d₂",
"Perimeter = 2(a + b)"
],
desc:[
"A kite has two pairs of equal adjacent sides.",
"Diagonals intersect at right angles.",
"One diagonal bisects the other.",
"It has one line of symmetry.",
"It resembles a flying kite."
]
},
{
name:"Pentagon",
image:"css-pentagon",
formulas:[
"Area (regular) = ¼√(5(5+2√5)) × side²",
"Perimeter = 5 × side"
],
desc:[
"A pentagon has five sides and five angles.",
"The sum of interior angles is 540°.",
"It can be regular or irregular.",
"Seen in buildings and logos.",
"A common polygon shape."
]
},
{
name:"Hexagon",
image:"css-hexagon",
formulas:[
"Area (regular) = (3√3/2) × side²",
"Perimeter = 6 × side"
],
desc:[
"A hexagon has six sides.",
"The sum of interior angles is 720°.",
"Honeycombs form hexagon shapes.",
"It can tile a surface without gaps.",
"Regular hexagons have equal sides."
]
},
{
name:"Heptagon",
image:"css-heptagon",
formulas:[
"Area (regular) = (7/4) × side² × cot(π/7)",
"Perimeter = 7 × side"
],
desc:[
"A heptagon has seven sides.",
"Interior angles sum to 900°.",
"It is less common in daily life.",
"It can be regular or irregular.",
"A seven-sided polygon."
]
},
{
name:"Octagon",
image:"css-octagon",
formulas:[
"Area (regular) = 2(1+√2) × side²",
"Perimeter = 8 × side"
],
desc:[
"An octagon has eight sides.",
"Interior angles sum to 1080°.",
"Stop signs use octagon shapes.",
"It has 8 vertices.",
"Can be regular or irregular."
]
},
{
name:"Nonagon",
image:"css-nonagon",
formulas:[
"Area (regular) = (9/4) × side² × cot(π/9)",
"Perimeter = 9 × side"
],
desc:[
"A nonagon has nine sides.",
"Interior angles sum to 1260°.",
"Also called an enneagon.",
"Rare in real-world objects.",
"A nine-sided polygon."
]
},
{
name:"Decagon",
image:"css-decagon",
formulas:[
"Area (regular) = (5/2) × side² × cot(π/10)",
"Perimeter = 10 × side"
],
desc:[
"A decagon has ten sides.",
"Interior angles sum to 1440°.",
"It has ten vertices.",
"Often used in decorative patterns.",
"A regular decagon has equal sides."
]
},
{
name:"Ellipse",
image:"css-ellipse",
formulas:[
"Area = πab",
"Perimeter ≈ π[3(a+b) − √((3a+b)(a+3b))]"
],
desc:[
"An ellipse looks like a stretched circle.",
"It has two focal points.",
"No straight sides or vertices.",
"Planets orbit the sun in elliptical paths.",
"It is a smooth curved shape."
]
},
{
name:"Semicircle",
image:"css-semicircle",
formulas:[
"Area = ½πr²",
"Perimeter = πr + 2r"
],
desc:[
"A semicircle is half of a circle.",
"It has one curved edge and one straight diameter.",
"It is symmetrical.",
"Used in arches and bridges.",
"Formed by cutting a circle in half."
]
},
{
name:"Sector",
image:"css-sector",
formulas:[
"Area = (θ/360) × πr²",
"Arc Length = (θ/360) × 2πr"
],
desc:[
"A sector is a part of a circle.",
"It is formed by two radii and an arc.",
"It looks like a pizza slice.",
"Measured using central angle θ.",
"Used in pie charts."
]
},
{
name:"Star",
image:"css-star",
formulas:["Area depends on design","Perimeter = sum of all sides"],
desc:[
"A star shape has multiple pointed tips.",
"It can be regular or decorative.",
"Often used as a symbol.",
"Seen on flags and awards.",
"Made from triangles or polygons."
]
},
{
name:"Heart",
image:"css-heart",
formulas:["Area varies by design","Perimeter varies"],
desc:[
"A heart shape is a symbol of love.",
"It has curved top lobes and a pointed bottom.",
"Not a regular geometric polygon.",
"Common in art and design.",
"Formed using curves."
]
},
{
name:"Crescent",
image:"css-crescent",
formulas:["Area based on two intersecting circles","Perimeter curved"],
desc:[
"A crescent looks like a moon shape.",
"It is formed from two circular arcs.",
"It has curved edges only.",
"Seen in flags and symbols.",
"Represents phases of the moon."
]
},
{
name:"Arrow",
image:"css-arrow",
formulas:["Area depends on triangle + rectangle parts","Perimeter sum of edges"],
desc:[
"An arrow shape shows direction.",
"It is made from a rectangle and triangle.",
"Common in road signs.",
"It has sharp angles.",
"A symbolic geometric shape."
]
},
{
name:"Cross",
image:"css-cross",
formulas:["Area depends on arm lengths","Perimeter varies"],
desc:[
"A cross shape has four equal arms.",
"It forms right angles.",
"Seen in symbols and designs.",
"It has multiple lines of symmetry.",
"Made from rectangles."
]
},
{
name:"Cloud",
image:"css-cloud",
formulas:["Area irregular","Perimeter curved"],
desc:[
"A cloud shape has soft rounded edges.",
"It is irregular and curved.",
"Used in cartoons and weather icons.",
"It has no straight sides.",
"A decorative shape."
]
},
{
name:"Leaf",
image:"css-leaf",
formulas:["Area irregular","Perimeter curved"],
desc:[
"A leaf shape is inspired by nature.",
"It often has a central vein.",
"It is curved and sometimes symmetrical.",
"Seen in plants and designs.",
"An organic geometric form."
]
},
{
name:"Drop",
image:"css-drop",
formulas:["Area irregular","Perimeter curved"],
desc:[
"A drop shape looks like a water droplet.",
"It has a rounded bottom and pointed top.",
"Used as a water symbol.",
"It is curved and smooth.",
"Seen in logos and icons."
]
}
];

export default shapes2D;
