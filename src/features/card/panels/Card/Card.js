import React, { useEffect, useState, useCallback, memo } from "react";
import {
  PanelHeaderSimple,
  PanelSpinner,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "react-router5";
import { fetchCard } from "../../actions";
import { getName } from "../../selectors";
import { goBack } from "../../../../app/actions";
import CardContent from "../../components/CardContent/CardContend";

const Card = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoader] = useState(true);
  const {
    route: {
      params: { cardId },
    },
  } = useRoute();
  const cardName = useSelector(getName);
  const goToColumns = useCallback(() => dispatch(goBack()), [dispatch]);

  useEffect(() => {
    if (cardId) {
      setLoader(true);

      dispatch(fetchCard(cardId)).finally(() => setLoader(false));
    }
  }, [cardId, dispatch]);

  return (
    <>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToColumns} />}>
        Карточка {cardName ? `«${cardName}»` : ""}
      </PanelHeaderSimple>

      {isLoading && <PanelSpinner />}

      <CardContent />
    </>
  );
};

export default memo(Card);
