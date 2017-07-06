import React, { Component } from "react";
import { getUserById } from "../api/hn-api";
import moment from "moment";
import Loading from "./Loading";

class User extends Component {
  state = {
    user: {},
    loaded: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getUserById(id).then(user => this.setState({ user, loaded: true }));
  }

  render() {
    const created = moment(this.state.user.created * 1000).fromNow();

    if (!this.state.loaded) return <Loading />;
    return (
      <div className="userblock">
        <table>
          <tbody>
            <tr>
              <td>user:</td>
              <td>
                {this.state.user.id}
              </td>
            </tr>
            <tr>
              <td>created:</td>
              <td>
                {created}
              </td>
            </tr>
            <tr>
              <td>karma:</td>
              <td>
                {this.state.user.karma}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;
