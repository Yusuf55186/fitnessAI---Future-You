type AccountProps = {
    username:string;
}
export const Account = ({username}:AccountProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fy-surface font-bold text-fy-accent">
        <span>{username.charAt(0).toUpperCase()}</span>
      </div>

      <span className="text-sm font-semibold text-white">
        {username}
      </span>
    </div>
  );
};