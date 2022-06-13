using OpenQA.Selenium;

namespace WebApp.UITests.PageObjectModels
{
    class HomePage : Page
    {
        protected override string Title => "React App";
        protected override string Url => "http://localhost:3000/";

        public HomePage(IWebDriver driver)
        {
            Driver = driver;
        }


        public IWebElement AddButton => Driver.FindElement(By.Id("count-up-btn"));
        public IWebElement MinusButton => Driver.FindElement(By.Id("count-down-btn"));
        public IWebElement CountText => Driver.FindElement(By.Id("count-text"));

        public void ClickAddButton(int n)
        {
            for (int i = 0; i < n; i++)
            {
                AddButton.Click();
            }
        }
        public void ClickMinusButton(int n)
        {
            for (int i = 0; i < n; i++)
            {
                MinusButton.Click();
            }
        }

    }
}
