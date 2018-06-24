import React, {Component} from 'react';
import './style.css'
import Line from './Line'

class ChoseFile extends Component  {
    componentDidMount () {
        let code = document.getElementById("codeSpace");
        let e = document.getElementById('choser');
        let audit = document.getElementById('audit');

        code.style.height = (window.innerHeight - e.clientHeight - (170 + audit.clientHeight)) + "px";
    }

    render () {

        let array = ["class Player {",

            "public function __construct($nameP){",
            "    $this->name = $nameP;",
            "}",
            "",
            "public $score = 0, $name = ''",
            "",
            "public function drop_cube() {",
            "    $cube_numb = rand(1, 6);",
            "    $this->add_score($cube_numb);",
            "}",
            "",
            "public function add_score($add) {",
            "    $this->score = $this->score + $add;",
            "    echo  $this->score $add;",
            "}",
            "",
            "public function set_name($nameP) {",
            "    $this->name = $nameP;",
            "}",
            "",
            "public function get_name() {",
            "    return $this->name;",
            "}",
            "",
            "public function get_score() {",
            "    return $this->score;",
            "}",
            "class Player {",

            "public function __construct($nameP){",
            "    $this->name = $nameP;",
            "}",
            "",
            "public $score = 0, $name = ''",
            "",
            "public function drop_cube() {",
            "    $cube_numb = rand(1, 6);",
            "    $this->add_score($cube_numb);",
            "}",
            "",
            "public function add_score($add) {",
            "    $this->score = $this->score + $add;",
            "    echo  $this->score $add;",
            "}",
            "",
            "public function set_name($nameP) {",
            "    $this->name = $nameP;",
            "}",
            "",
            "public function get_name() {",
            "    return $this->name;",
            "}",
            "",
            "public function get_score() {",
            "    return $this->score;",
            "}"
        ];


        let lines = [];
        for (let i = 0; i < array.length; i++) {
            lines[i] = <Line id={i} text={array[i]}/>
        }

        return (
            <div id="codeSpace" className="codeSpace">
                {lines}
            </div>
        )
    }
}

export default ChoseFile