import { useCallback } from "react";
import { useSelector } from "react-redux";
import TopBar from "../components/TopBar";

const TopBarContainer = () => {
  const { check_num, all_num } = useSelector((state) => ({
    check_num: state.check_num,
    all_num: state.all_num,
  }));

  const dealt = useCallback(() => {
    return all_num !== 0 ? Math.round((check_num / all_num) * 100) + "%" : "0%";
  }, [all_num, check_num]);

  return <TopBar dealt={dealt} />;
};

export default TopBarContainer;
