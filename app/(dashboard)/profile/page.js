import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <div className="flex items-center">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
