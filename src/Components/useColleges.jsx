import { useQuery } from "@tanstack/react-query";

const useColleges = () => {
    const { data: colleges = [], refetch } = useQuery({
      queryKey: ["colleges"],
      queryFn: async () => {
        const res = await fetch(
          "https://college-hub-server.vercel.app/colleges"
        );
        return res.json();
      },
    });
    return [colleges, refetch];
};

export default useColleges;