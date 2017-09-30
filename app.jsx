function Student(name, teachPoints, lifePoints) {
    this.name = name;
    this.teachPoints = teachPoints;
    this.lifePoints = lifePoints;
    this.status = 'ACTIVE';
}

class StudentsRecord extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            students: []
        };
    }

    addStudent (e) {
        console.log('hice click!');
        let name = prompt("Nombre de la estudiante").toUpperCase();
        let teachPoints = parseInt(prompt("Porcentaje Técnico"));
        let lifePoints = parseInt(prompt("Porcentaje Habilidades Socio-Emocionales"));
        let student = new Student(name, teachPoints, lifePoints);
        this.setState({
            students: this.state.students.concat([student])
        });
        console.log(this.state.students);

        console.log(this.state.students.length);
        console.log(student);
    }
    // onSubmit(e) {
    //     e.preventDefault();
    //     console.log("onSubmit");
    //     var item = {
    //         text: this.state.text,
    //         checked: false
    //     };
    //     this.setState({
    //         text: "",
    //         todolist: this.state.todolist.concat([item])
    //     });
    // }
    // onChange(e) {
    //     console.log("onChange", e.target.value);
    //     this.setState({
    //         text: e.target.value,
    //         todolist: this.state.todolist
    //     });
    // }
    showStudent (student,index) {

        return (
            <div key={index}>
                <p>Nombre: {student.name}</p>
                <p>Puntaje Tecnico: {student.teachPoints}</p>
                <p>Puntaje HSE: {student.lifePoints}</p>
                <p>Estatus: {student.status}</p>
            </div>
        );
    }

    printAll (e) {
        console.log('yai')
        return true;
    }

    showStudents (students) {
        return students.map((student,index)=>{
            return (
                <div key={index}>
                    <p>Nombre: {student.name}</p>
                    <p>Puntaje Tecnico: {student.teachPoints}</p>
                    <p>Puntaje HSE: {student.lifePoints}</p>
                    <p>Estatus: {student.status}</p>
                </div>
            );
        });
    }

    render() {
        let student;
        if (this.state.students.length > 0){
            let index = (this.state.students).length-1;
            student = this.showStudent(this.state.students[index],index);
        }
        let students;
        if(this.printAll()){
            students = this.showStudents(this.state.students);
        }

        console.log(this.state.students.length);
        return (
            <div>
                <header>
                    <div className="nav-wrapper">
                        <h1>{this.state.title}</h1>
                    </div>
                </header>
                <section className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <button onClick={e => this.addStudent(e)} className="btn btn-success">Add Student</button>
                        </div>
                        <div className="col-md-3">
                            <button onClick={e=> this.printAll(e)} className="btn btn-success">Print All</button>
                        </div>
                        <div className="col-md-3">
                            <button onClick={e=> this.updateDropout(e)} className="btn btn-success">Update Dropout</button>
                        </div>
                        <div className="col-md-3">
                            <button onClick={e=> this.runEmployability(e)} className="btn btn-success">Run Employability</button>
                        </div>
                    </div>
                </section>
                <section>
                    {student &&
                        <div>{student}</div>
                    }
                    {this.printAll() &&
                        <div>{students}</div>
                    }
                </section>
            </div>
        );
    }
}

const items = [];

ReactDOM.render(<StudentsRecord students={items} title={'Students Redcord'} />, document.getElementById("container"));