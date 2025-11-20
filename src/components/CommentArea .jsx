import { Component } from "react";
import CommentList from "./CommentsList ";

class CommentArea extends Component {
  state = {
    comment: [],
  };

  getData = function () {
    const apiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
    let asinId = this.props.comment;

    fetch(apiUrl + asinId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYmI0YmY0YmQ0NzAwMTU4NWIxZWIiLCJpYXQiOjE3NjM2NDUxNzYsImV4cCI6MTc2NDg1NDc3Nn0.VxIyW_QA2oZ2MzTxq1s9kcfC3h5Je8T7AavKJRVzJqM",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Ci siamo collegati al server: ${response.ok}`);
          return response.json();
        } else {
          throw new Error(
            `La chiamata connessione non è andata a buon fine ${response.status}`
          );
        }
      })
      .then((comments) => {
        this.setState({
          comment: comments,
        });
      })
      .catch((error) => {
        console.log(`Errore ${error}`);
      });
  };

  componentDidMount() {
    console.log(this.props.comment);

    this.getData();
  }

  render() {
    console.log(this.state.comment);
    return (
      <>
        <CommentList comment={this.state.comment} />
      </>
    );
  }
}

export default CommentArea;
