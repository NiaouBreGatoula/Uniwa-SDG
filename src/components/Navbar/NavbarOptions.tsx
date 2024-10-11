import {
  ButtonGroup,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import LanguageIcon from "../../assets/lang.svg";
import AboutUs from "../../assets/about.svg";
import RestartIcon from "../../assets/restart.svg";

interface NavbarOptionsProps {
  handleRestart: () => void;
  language: string;
  onOpen: () => void;
  isOpen: boolean;
  onOpenChange: () => void;
  handleLanguageChange: (key: string) => void;
}

const NavbarOptions = ({
  handleRestart,
  language,
  onOpen,
  isOpen,
  onOpenChange,
  handleLanguageChange,
}: NavbarOptionsProps) => {
  return (
    <nav className="select-none">
      <ul className="flex space-x-4 select-none">
        <ButtonGroup className="select-none">
          <Button
            color="primary"
            variant="shadow"
            radius="sm"
            onPress={handleRestart}
            className="select-none"
          >
            <img
              src={RestartIcon}
              alt="Restart Icon"
              className="inline-block mr-2 h-4 w-4 select-none"
            />
            {language === "en" ? "Restart" : "Επανεκκίνηση"}
          </Button>
          <Button
            color="primary"
            variant="shadow"
            radius="sm"
            onPress={onOpen}
            className="select-none"
          >
            <img
              src={AboutUs}
              alt="About Us"
              className="inline-block mr-2 h-4 w-4 select-none"
            />
            {language === "en" ? "About Us" : "Σχετικά με εμάς"}
          </Button>
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            classNames={{
              backdrop:
                "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 select-none",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 select-none">
                    Uniwa SDG Evaluation Project
                  </ModalHeader>
                  <ModalBody className="select-none">
                    {language === "en" ? (
                      <>
                        <p>
                          <strong>
                            This project was created by two students
                          </strong>{" "}
                          from the{" "}
                          <strong>
                            Department of Computer Science and Engineering at
                            UniWA
                          </strong>
                          . It is part of the course{" "}
                          <strong>
                            "Educational Technology & Teaching of Informatics"
                          </strong>
                          .
                        </p>
                        <p>
                          The main goal of the project is to develop a website
                          that evaluates how well an educational institution
                          integrates the{" "}
                          <strong>Sustainable Development Goals (SDGs)</strong>.
                          The website collects data, calculates scores, and
                          provides a final weighted evaluation based on multiple
                          indicators related to{" "}
                          <strong>sustainability performance</strong>.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          <strong>
                            Αυτό το έργο δημιουργήθηκε από δύο φοιτητές
                          </strong>{" "}
                          του{" "}
                          <strong>
                            Τμήματος Μηχανικών Πληροφορικής και Υπολογιστών του
                            Πανεπιστημίου Δυτικής Αττικής
                          </strong>
                          . Είναι μέρος του μαθήματος{" "}
                          <strong>
                            "Εκπαιδευτική Τεχνολογία και Διδακτική της
                            Πληροφορικής"
                          </strong>
                          .
                        </p>
                      </>
                    )}
                  </ModalBody>
                  <ModalFooter className="select-none">
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onClose}
                      className="select-none"
                    >
                      {language === "en" ? "Close" : "Κλείσιμο"}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Dropdown className="select-none">
            <DropdownTrigger>
              <Button
                color="primary"
                variant="shadow"
                radius="sm"
                className="select-none"
              >
                <img
                  src={LanguageIcon}
                  alt="Language Icon"
                  className="inline-block mr-2 h-4 w-4 select-none"
                />
                {language === "en" ? "Language" : "Γλώσσα"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language Selection"
              className="select-none"
            >
              <DropdownItem
                key="gr"
                onClick={() => handleLanguageChange("gr")}
                className="select-none"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/32px-Flag_of_Greece.svg.png"
                  alt="Greek Flag"
                  className="inline-block mr-2 h-4 w-6 select-none"
                />
                GR
              </DropdownItem>
              <DropdownItem
                key="en"
                onClick={() => handleLanguageChange("en")}
                className="select-none"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_the_United_States.svg.png"
                  alt="English Flag"
                  className="inline-block mr-2 h-4 w-6 select-none"
                />
                EN
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonGroup>
      </ul>
    </nav>
  );
};

export default NavbarOptions;
