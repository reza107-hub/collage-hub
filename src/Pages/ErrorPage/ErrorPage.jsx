import { Link, useRouteError } from "react-router-dom";
import ErrorSettingimg from "./ErrorSettingimg";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <Helmet>
        <title>College-Hub | Error Page</title>
      </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <ErrorSettingimg />

        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn btn-primary normal-case">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
