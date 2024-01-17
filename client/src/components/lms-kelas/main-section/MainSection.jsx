import {
  Box,
  Progress,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useQuery,
  useSteps,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { HiChevronRight } from "react-icons/hi";
const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

function MainSection() {
  // console.log({ coba });
  // const { id } = useParams();
  const [materiId, setMateriId] = useState(1);
  const [title, setTitle] = useState("");
  const [userProgres, setUserProgres] = useState(null);
  const [kelasModul, setKelasModul] = useState([]);
  const [subModul, setSubModul] = useState([]);
  const [kelasSite, setKelasSite] = useState("");
  const [materiSite, setMateriSite] = useState("");
  const [toggle, setToggle] = useState(false);
  const [materiNow, setMateriNow] = useState([]);
  const timeoutRef = useRef(null);

  const { activeStep, goToNext, goToPrevious, setActiveStep, isCompleteStep } =
    useSteps({
      index: 1,
      count: kelasModul.length,
    });

  const navigate = useNavigate();

  // Fungsi untuk mengubah indeks langkah yang aktif
  const changeActiveStep = (newIndex) => {
    // Pastikan indeks baru berada dalam rentang yang valid
  };

  // const { activeStep } = useSteps({
  //   index: 1,
  //   count: steps.length,
  // });

  const fetchMateri = async () => {
    // const meteriID = JSON.parse(localStorage.getItem("materi")) || 7;
    const currentUrl = window.location.href;

    const url = new URL(currentUrl);

    const queryParams = new URLSearchParams(url.search);

    const materi = queryParams.get("materi");
    const kelas = queryParams.get("kelas");
    setKelasSite(kelas);
    setMateriSite(materi);

    console.log({ materi, kelas });
    // let idMateriClick;
    // if (userProgres)
    //   idMateriClick = Number(userProgres?.kelas_regists[0]?.progress);
    // else idMateriClick = 1;

    // alert(idMateriClick);
    const token = JSON.parse(localStorage.getItem("auth"));

    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/userKelas/materi/mulai`,
        {
          materiID: Number(materi),
          kelasID: Number(kelas),
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      const progressSave = response.data.data.progress_user;
      console.log(response);
      setTitle(response.data.data.materi.materi);
      setUserProgres(progressSave);
      setKelasModul(response.data.data.modul);
      setSubModul(response.data.data.materi.sub_materi_kelas);
      // setMateriNow(response.data.data.)
      if (
        progressSave.kelas_regists[0].progress + 1 >= 0 &&
        progressSave.kelas_regists[0].progress + 1 <= kelasModul.length
      ) {
        // Metode onNext akan memperbarui indeks langkah yang aktif
        console.log({ progres: progressSave.kelas_regists[0].progress });
        setActiveStep(progressSave.kelas_regists[0].progress);
        // setActiveStep(2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMateri();
  }, [window.location.href]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (toggle) {
      timeoutRef.current = setTimeout(async () => {
        setToggle(false);
      }, 10000);
    }
  }, [toggle]);

  return (
    <div
      className={`${
        toggle ? "h-full" : "h-full"
      } relative flex overflow-hidden   w-full justify-between items-start mt-[52px] `}
    >
      {/* <button onClick={() => changeActiveStep(activeStep + 1)}>click</button> */}
      <div className="w-full max-w-[373px]  h-[1340px]  overflow-y-scroll overflow-x-clip  bg-whiteSmoke600  py-[24px] hidden xl:flex flex-col justify-start items-center">
        <div className="w-full  h-full">
          <div className="w-full px-[24px]">
            <p className="text-[22px] font-medium leading-[32px]">
              {title || "no data"}
            </p>
          </div>

          <div className="w-full max-w-[373px]  flex flex-col mt-[16px] mb-[48px] px-[24px]">
            <Progress
              value={Number(
                userProgres && userProgres.persentase
                  ? userProgres.persentase
                  : 0
              )}
              size="xs"
              colorScheme="blue"
              width={"100%"}
            />
            <div className="mt-[16px] w-full flex flex-col items-start text-whiteSmoke800">
              <p className="text-[12px] font-bold leading-[20px]">
                {userProgres?.persentase || 0}% selesai
              </p>
              <p className="text-[12px] font-bold leading-[20px]">
                Terakhir dipelajari
              </p>
            </div>
          </div>

          <div className="w-full">
            <Stepper
              index={activeStep}
              orientation="vertical"
              className="h-full w-full"
              gap="0"
              size={"xs"}
              colorScheme="blue"
              paddingX={0}
              display={"flex"}
            >
              {kelasModul?.map((step, index) => (
                <Box width={"100%"} className=" flex flex-1 text-sky-700">
                  <StepStatus
                    complete={
                      <div className="relative w-full">
                        <Step key={index} className={`  ml-[24px] w-full`}>
                          <Box className=" w-full   gap-5  flex flex-1 ">
                            <StepIndicator>
                              <StepStatus complete={<StepIcon />} />
                            </StepIndicator>

                            <Box flexShrink="0" cursor={"pointer"}>
                              <StepStatus
                                complete={
                                  <>
                                    <p className="opacity-0 line-clamp-2 w-[336px]  bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                      {step.title}
                                    </p>
                                    <p className="absolute line-clamp-2 -left-[20px] -top-[26px] w-[336px]  bg-opacity-10 px-[48px] py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                      {step.title}
                                    </p>
                                  </>
                                }
                              />
                            </Box>
                          </Box>
                          <StepSeparator />
                        </Step>
                      </div>
                    }
                    incomplete={
                      <div className="relative w-full">
                        <Step key={index} className={` ml-[24px] w-full`}>
                          <Box className=" w-full   gap-5  flex flex-1 ">
                            <StepIndicator>
                              <StepStatus complete={<StepIcon />} />
                            </StepIndicator>

                            <Box flexShrink="0" cursor={"pointer"}>
                              <StepStatus
                                incomplete={
                                  <>
                                    <p className="opacity-0 line-clamp-2 w-[336px]   bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                      {step.title}
                                    </p>
                                    <p className="absolute line-clamp-2 opacity-10 -left-[20px] -top-[26px] w-[336px]   bg-opacity-10 px-[48px] py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                      {step.title}
                                    </p>
                                  </>
                                }
                              />
                            </Box>
                          </Box>
                          <StepSeparator />
                        </Step>
                      </div>
                    }
                    active={
                      <div className="relative w-full">
                        <Step key={index} className={` ml-[24px]  w-full`}>
                          <Box className=" w-full    gap-5  flex flex-1 ">
                            <StepIndicator className="">
                              <StepStatus complete={<StepIcon />} />
                            </StepIndicator>

                            <Box flexShrink="0" cursor={"pointer"}>
                              <StepStatus
                                active={
                                  <>
                                    <p className="opacity-0  w-[336px]  bg-black400  bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold leading-[21px]">
                                      {step.title}
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                    </p>
                                    <p className="absolute  -left-[24px] right-0 -top-[26px] w-[380px] bg-black400  bg-opacity-10 px-[48px] py-[24px] text-[14px] font-bold leading-[21px] ">
                                      {step.title}
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                    </p>
                                  </>
                                }
                              />
                            </Box>
                          </Box>
                          <StepSeparator />
                        </Step>
                      </div>
                    }
                  />
                </Box>
              ))}
            </Stepper>
            {/* <Stepper
              index={activeStep}
              orientation="vertical"
              height="100vh"
              gap="0"
            >
              {kelasModul.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus complete={<StepIcon />} />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle className="text-sky-700 w-[260px] text-[14px] font-bold hover:font-extrabold">
                      {step.title}
                    </StepTitle>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper> */}
          </div>
        </div>
      </div>

      <div
        onClick={() => setToggle((prev) => !prev)}
        className={`${
          toggle ? "bg-opacity-80 " : "bg-opacity-0 pointer-events-none"
        } absolute w-screen h-full bg-black  `}
      ></div>
      <div
        onClick={() => setToggle((prev) => !prev)}
        className={`absolute ${
          toggle ? "translate-x-0" : "-translate-x-[373px]"
        } duration-300   cursor-pointer left-[373px] top-[232px] rounded-r-[10px] bg-whiteSmoke600 w-[25px] h-[64px] flex justify-center items-center`}
      >
        <HiChevronRight
          className={`${toggle ? "rotate-0" : "rotate-180"} duration-300`}
        />
      </div>
      <div
        className={`${
          toggle ? "translate-x-0" : "-translate-x-full"
        } duration-300 absolute bg-whiteSmoke600 w-full max-w-[373px]  h-[1340px]  overflow-y-scroll overflow-x-clip    py-[24px] flex xl:hidden flex-col justify-start items-center`}
      >
        <div className="w-full  h-full">
          <div className="w-full px-[24px]">
            <p className="text-[22px] font-medium leading-[32px]">
              {title || "no data"}
            </p>
          </div>

          <div className="w-full max-w-[373px]  flex flex-col mt-[16px] mb-[48px] px-[24px]">
            <Progress
              value={Number(
                userProgres && userProgres.persentase
                  ? userProgres.persentase
                  : 0
              )}
              size="xs"
              colorScheme="blue"
              width={"100%"}
            />
            <div className="mt-[16px] w-full flex flex-col items-start text-whiteSmoke800">
              <p className="text-[12px] font-bold leading-[20px]">
                {userProgres?.persentase || 0}% selesai
              </p>
              <p className="text-[12px] font-bold leading-[20px]">
                Terakhir dipelajari
              </p>
            </div>
          </div>

          <div className="w-full">
            <Stepper
              index={activeStep}
              orientation="vertical"
              className="h-full w-full"
              gap="0"
              size={"xs"}
              colorScheme="blue"
              paddingX={0}
              display={"flex"}
            >
              {kelasModul?.map((step, index) => (
                <Box width={"100%"} className=" flex flex-1 text-sky-700">
                  <StepStatus
                    complete={
                      <div className="relative w-full">
                        <Step key={index} className={`  ml-[24px] w-full`}>
                          <Box className=" w-full   gap-5  flex flex-1 ">
                            <StepIndicator>
                              <StepStatus complete={<StepIcon />} />
                            </StepIndicator>

                            <Box flexShrink="0" cursor={"pointer"}>
                              <StepStatus
                                complete={
                                  <>
                                    <p className="opacity-0 line-clamp-2 w-[336px]  bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                      {step.title}
                                    </p>
                                    <p className="absolute line-clamp-2 -left-[20px] -top-[26px] w-[336px]  bg-opacity-10 px-[48px] py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                      {step.title}
                                    </p>
                                  </>
                                }
                              />
                            </Box>
                          </Box>
                          <StepSeparator />
                        </Step>
                      </div>
                    }
                    incomplete={
                      <div className="relative w-full">
                        <Step key={index} className={` ml-[24px] w-full`}>
                          <Box className=" w-full   gap-5  flex flex-1 ">
                            <StepIndicator>
                              <StepStatus complete={<StepIcon />} />
                            </StepIndicator>

                            <Box flexShrink="0" cursor={"pointer"}>
                              <StepStatus
                                incomplete={
                                  <>
                                    <p className="opacity-0 line-clamp-2 w-[336px]   bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                      {step.title}
                                    </p>
                                    <p className="absolute line-clamp-2 opacity-10 -left-[20px] -top-[26px] w-[336px]   bg-opacity-10 px-[48px] py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                      {step.title}
                                    </p>
                                  </>
                                }
                              />
                            </Box>
                          </Box>
                          <StepSeparator />
                        </Step>
                      </div>
                    }
                    active={
                      <div className="relative w-full">
                        <Step key={index} className={` ml-[24px]  w-full`}>
                          <Box className=" w-full    gap-5  flex flex-1 ">
                            <StepIndicator className="">
                              <StepStatus complete={<StepIcon />} />
                            </StepIndicator>

                            <Box flexShrink="0" cursor={"pointer"}>
                              <StepStatus
                                active={
                                  <>
                                    <p className="opacity-0  w-[336px]  bg-black400  bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold leading-[21px]">
                                      {step.title}
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                    </p>
                                    <p className="absolute  -left-[24px] right-0 -top-[26px] w-[380px] bg-black400  bg-opacity-10 px-[48px] py-[24px] text-[14px] font-bold leading-[21px] ">
                                      {step.title}
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                      fbiebfififiqfiqbfiiqwifqifwnwqfnqfuiwbqofnqnfqonfwqnfqfn
                                    </p>
                                  </>
                                }
                              />
                            </Box>
                          </Box>
                          <StepSeparator />
                        </Step>
                      </div>
                    }
                  />
                </Box>
              ))}
            </Stepper>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col h-[1340px] overflow-y-scroll  scrollbar-hide items-center pt-[32px] px-5  lg:px-[100px] gap-[32px] lg:gap-[52px]">
        <div className="flex flex-col items-start w-full gap-[8px]">
          <p className="text-[12px] font-light leading-[20px]">
            Pelajaran 3 dari 4
          </p>
          <p className="text-[22px] lg:text-[32px] font-bold leading-[40px]">
            Modul 3: Pembentukan Ide Bisnis Kreatif
          </p>
        </div>

        <div className="w-full lg:w-[752px]   flex flex-col items-center justify-center gap-[52px]">
          {/* <iframe
                      width="560"
                      height="315"
                      src={`${
                        el?.link &&
                        el.link.replace(
                          "youtu.be",
                          "www.youtube-nocookie.com/embed"
                        )
                      }`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-[350px] h-[200px] md:w-[529px] md:h-[356px] rounded-[10px] "
                    ></iframe> */}
          {subModul?.map((el) => {
            return (
              <div className="w-full flex flex-col justify-center items-center">
                <iframe
                  width="560"
                  height="315"
                  src={`${
                    el?.link &&
                    el.link.replace(
                      "youtu.be",
                      "www.youtube-nocookie.com/embed"
                    )
                  }`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="w-[358px] h-[204px] md:w-[752px] md:h-[424px]  rounded-[10px] "
                ></iframe>
              </div>
            );
          })}
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            onClick={() =>
              navigate(
                `/lms?kelas=${kelasSite}&materi=${Number(materiSite) + 1}`
              )
            }
            className="px-[48px] py-[16px] flex items-center justify-center bg-black500 rounded-[10px] mb-[52px]"
          >
            <p className="text-[16px] font-medium leading-[24px] text-white">
              Pelajaran Berikutnya
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
