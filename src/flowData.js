const flowData = {
  question: "Can others close the source after modifying the code?",
  options: [
    {
      label: "Yes",
      next: {
        question: "Must every modified file include a copyright notice?",
        options: [
          {
            label: "Yes",
            result: "Apache License"
          },
          {
            label: "No",
            next: {
              question: "Can the software's advertisement use your name for promotion?",
              options: [
                {
                  label: "Yes",
                  result: "MIT License"
                },
                {
                  label: "No",
                  result: "BSD License"
                }
              ]
            }
          }
        ]
      }
    },
    {
      label: "No",
      next: {
        question: "Must new code use the same license?",
        options: [
          {
            label: "Yes",
            result: "GPL License"
          },
          {
            label: "No",
            next: {
              question: "Is it required to provide documentation for source code modifications?",
              options: [
                {
                  label: "Yes",
                  result: "Mozilla License"
                },
                {
                  label: "No",
                  result: "LGPL License"
                }
              ]
            }
          }
        ]
      }
    }
  ]
};

export default flowData; 