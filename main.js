class Editor extends React.Component{
    constructor(){
        super();
        this.state = {
            testoEditor: "",
            editor:"",
        }
        this.salvaInStorage = this.salvaInStorage.bind(this);
        localStorage.clear()
    }
   
    componentDidMount(){
        tinymce.init({
            selector: "#myTextarea",
            plugins: "wordcount table",
            setup: (editor) => {
                this.setState({editor});
                editor.on('keyup change', function (){
                    const text = editor.getContent();
                    console.log(text)//prova
                    this.setState({testoEditor:text});
                }.bind(this));
            },
        });
    }

    salvaInStorage(){
        this.state.testoEditor = tinymce.activeEditor.getContent({format: 'raw'});
        localStorage.setItem('testoInserito', this.state.testoEditor);
        tinyMCE.activeEditor.setContent("");
    }


    render(){
        return (
                <div>
                    <textarea id="myTextarea"></textarea>
                    <button className="btn btn-primary" onClick={this.salvaInStorage}>Salva</button>
                    <div> {this.state.testoEditor} </div>
                </div>
        )
    }

}


ReactDOM.render(
    <Editor/>,
    document.getElementById("root")
)