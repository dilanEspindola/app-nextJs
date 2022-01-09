import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Container from "../../components/Container";

const UserProfile = (props) => {
  const { first_name, last_name, email, avatar } = props.users.data;
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center">
                <img
                  src={avatar}
                  alt=""
                  style={{ borderRadius: "50%", width: "150px" }}
                />
              </div>
              <div className="card-body text-center">
                <h3>
                  {id}. {first_name} {last_name}
                </h3>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const data = await res.json();
  return { users: data };
};

export default UserProfile;
