import Router from "next/router";

const Users = (props) => {
  const { data } = props.users;

  data.map((user) => console.log(user));
  return (
    <>
      <ul className="list-group">
        {data.map((user) => (
          <li
            className="list-group-item list-group-action d-flex justify-content-between aling-items-center"
            key={user.id}
            onClick={(e) => Router.push("/users/[id]", `/users/${user.id}`)}
          >
            <div>
              <h5>
                <a>
                  {user.first_name} {user.last_name}
                </a>
              </h5>
              <p>{user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.first_name + user.last_name}
              style={{ borderRadius: "50%" }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
