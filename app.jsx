function Student(name, teachPoints, lifePoints) {
    this.name = name;
    this.teachPoints = teachPoints;
    this.lifePoints = lifePoints;
    this.status = 'ACTIVE';
}

class StudentsRecord extends React.Component {
    constructor(props) {
        super(props);
        this.estudiantes = [];
        this.state = {
            title: props.title,
            students: [],
            student: null
        };
    }

    addStudent (e) {
        let name = prompt("Nombre de la estudiante").toUpperCase();
        let teachPoints = parseInt(prompt("Porcentaje Técnico"));
        let lifePoints = parseInt(prompt("Porcentaje Habilidades Socio-Emocionales"));
        let student = new Student(name, teachPoints, lifePoints);
        this.setState({
            student: student,
            students:[]
        });
        this.estudiantes.push(student);
        console.log(this.estudiantes);
    }
    showStudent () {
        if(this.state.student){
            return (
                <div >
                    <p>Nombre: {this.state.student.name}</p>
                    <p>Puntaje Tecnico: {this.state.student.teachPoints}</p>
                    <p>Puntaje HSE: {this.state.student.lifePoints}</p>
                    <p>Estatus: {this.state.student.status}</p>
                </div>
            );
        }
        else
            return null;
    }
    printAll(){
        this.setState({
            student:null,
            students:this.estudiantes
        });
    }
    showStudents () {
        return this.state.students.map((student,index)=>{
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
    updateDropout () {
        console.log(this.estudiantes);
    }
    ordenar () {
        console.log('holi')
    }
    render() {
        console.log(this.state.students.length);
        return (
            <div>
                <header>
                    <div className="nav-wrapper">
                        <h1>{this.state.title}</h1>
                    </div>
                </header    >
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
                    <div>{this.showStudent()}</div>
                    <div>{this.showStudents()}</div>
                    <div>{this.ordenar()}</div>
                </section>
            </div>
        );
    }
}

const items = [];

ReactDOM.render(<StudentsRecord students={items} title={'Students Redcord'} />, document.getElementById("container"));