import axios from "axios";
import { useEffect, useState } from "react";
import { ITransference } from "../types";

const useTransferences = () => {
  const [transferencesInfo, setTransferencesInfo] = useState<ITransference[]>([
    {
      account_id: 1,
      amount: 100,
      dated: "2022-01-01",
      description: "Sample transfer 1",
      destination: "Account A",
      id: 1,
      origin: "Account B",
      type: "Transfer"
    },
    {
      account_id: 2,
      amount: 200,
      dated: "2022-01-02",
      description: "Sample transfer 2",
      destination: "Account C",
      id: 2,
      origin: "Account D",
      type: "Transfer"
    },
    {
      account_id: 3,
      amount: 300,
      dated: "2022-01-03",
      description: "Sample transfer 3",
      destination: "Account E",
      id: 3,
      origin: "Account F",
      type: "Transfer"
    },
    {
      account_id: 4,
      amount: 400,
      dated: "2022-01-04",
      description: "Sample transfer 4",
      destination: "Account G",
      id: 4,
      origin: "Account H",
      type: "Transfer"
    },
    {
      account_id: 5,
      amount: 500,
      dated: "2022-01-05",
      description: "Sample transfer 5",
      destination: "Account I",
      id: 5,
      origin: "Account J",
      type: "Transfer"
    },
    {
      account_id: 6,
      amount: 600,
      dated: "2022-01-06",
      description: "Sample transfer 6",
      destination: "Account K",
      id: 6,
      origin: "Account L",
      type: "Transfer"
    },
    {
      account_id: 7,
      amount: 700,
      dated: "2022-01-07",
      description: "Sample transfer 7",
      destination: "Account M",
      id: 7,
      origin: "Account N",
      type: "Transfer"
    },
    {
      account_id: 8,
      amount: 800,
      dated: "2022-01-08",
      description: "Sample transfer 8",
      destination: "Account O",
      id: 8,
      origin: "Account P",
      type: "Transfer"
    },
    {
      account_id: 9,
      amount: 900,
      dated: "2022-01-09",
      description: "Sample transfer 9",
      destination: "Account Q",
      id: 9,
      origin: "Account R",
      type: "Transfer"
    },
    {
      account_id: 10,
      amount: 1000,
      dated: "2022-01-10",
      description: "Sample transfer 10",
      destination: "Account S",
      id: 10,
      origin: "Account T",
      type: "Transfer"
    },
    {
      account_id: 11,
      amount: 1100,
      dated: "2022-01-11",
      description: "Sample transfer 11",
      destination: "Account U",
      id: 11,
      origin: "Account V",
      type: "Transfer"
    },
    {
      account_id: 12,
      amount: 1200,
      dated: "2022-01-12",
      description: "Sample transfer 12",
      destination: "Account W",
      id: 12,
      origin: "Account X",
      type: "Transfer"
    }
  ]);

  const [isLoadingTransferenceHook, setIsLoadingTransferenceHook] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const account = localStorage.getItem("accountId");

    const fetchData = async () => {
      try {
        const configTransferences = {
          method: "get",
          url: `https://digitalmoney.ctd.academy/api/accounts/${account}/activity`,
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.request(configTransferences);
        setTransferencesInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (isLoadingTransferenceHook) {
      fetchData();
      setIsLoadingTransferenceHook(false);
    }

  }, []); // Sin dependencias para que solo se ejecute una vez al montar el componente

  return { transferencesInfo, isLoadingTransferenceHook };
};

export default useTransferences;