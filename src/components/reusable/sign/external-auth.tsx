import ExternalAuthButton from "./external-auth-button";
import { type SignProps } from "../../../types/types";

const ExternalAuth = ({ authButtons }: Pick<SignProps, "authButtons">) => {
  return (
    <>
      {authButtons.map((aB) => {
        return (
          <ExternalAuthButton
            key={aB.buttonText}
            buttonSvg={aB.buttonSvg}
            buttonText={aB.buttonText}
          />
        );
      })}
      <Separator />
    </>
  );
};

const Separator = () => {
  return (
    <div className="m-3 flex items-center justify-around">
      <div className="w-32 border border-green-300"></div>
      <p className="text-sm italic text-slate-600">or</p>
      <div className="w-32 border border-green-300"></div>
    </div>
  );
};

export default ExternalAuth;
