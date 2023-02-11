export type ProfileProps = {
  name: string;
};

function Profile({ name }: ProfileProps) {
  return <div>Hello {name}</div>;
}

export default Profile;
