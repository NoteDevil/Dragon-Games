import { CircleExclamation } from "./icons";

export default function ErrorMessage(props: any) {
  return (
    <div className="flex items-center justify-center h-full flex-col gap-5">
      <div>
        <CircleExclamation />
      </div>
      <div>{props.msg}</div>
    </div>
  );
}
