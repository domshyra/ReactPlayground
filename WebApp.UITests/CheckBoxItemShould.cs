using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Xunit;

namespace WebApp.UITests
{
    public class CheckBoxItemShould
    {
        [Fact]
        [Trait("Category", "Smoke")]
        public void LoadApplicationPage()
        {
            using IWebDriver driver = new ChromeDriver();
            driver.Navigate().GoToUrl("http://localhost:3000");
        }

    }
}

