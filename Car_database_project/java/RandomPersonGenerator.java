import java.security.InvalidParameterException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

    public class RandomPersonGenerator {
        private static final String[] FIRST_NAMES = {"John", "Alice", "Michael", "Emily", "William", "David", "Ava", "Daniel", "Olivia", "Sophia"};
        private static final String[] LAST_NAMES = {"Doe", "Johnson", "Lee", "Garcia", "Brown", "Rodriguez", "Martinez", "Jackson", "Kim", "Nguyen"};

        private static final String[] ADDRESSES = {"123 Main St, Anytown USA", "456 Elm St, Anytown USA", "789 Oak St, Anytown USA", "321 Maple St, Anytown USA",
                "654 Pine St, Anytown USA", "987 Cedar St, Anytown USA", "654 Oak St, Anytown USA", "321 Cedar St, Anytown USA",
                "1111 Broadway St, Anytown USA", "2222 Central Ave, Anytown USA"};
        private static final String[] EMAIL_DOMAINS = {"example.com", "test.com", "foo.com", "bar.com", "baz.com", "qux.com"};

        private static final Random random = new Random();

        public static void main(String[] args) {
            List<Person> people = generatePeople(10);
            for (Person person : people) {
                String s = "";
                if (person.toString().equalsIgnoreCase("customer")) {
                    Customer c = (Customer) person;
                    s = personOut(c) + " " + c.getAddress() + " " + c.getEmail();
                    if (!c.getContacts().isEmpty()){
                        s += " Contacts: {";
                        for (Person p: c.getContacts()){
                            s += " " + personOut(p);
                        }
                        s+= "}";
                    }
                } else {
                    throw new InvalidParameterException();
                }
                System.out.println(s);


            }
        }

        private static String personOut(Person p){
            return p.firstName + " " + p.lastName + " " + p.phoneNumber;
        }
        public static List<Person> generatePeople(int numPeople) {
            List<Person> people = new ArrayList<>();
            for (int i = 0; i < numPeople; i++) {
                String firstName = getRandomItemFromArray(FIRST_NAMES);
                String lastName = getRandomItemFromArray(LAST_NAMES);
                String phoneNumber = generateRandomPhoneNumber();
                String address = getRandomItemFromArray(ADDRESSES);
                String email = generateRandomEmail(firstName, lastName);
                List<Person> contacts = generateRandomContacts();

                Person person = new Customer(firstName, lastName, phoneNumber, address, email, contacts);
                people.add(person);
            }
            return people;
        }

        private static String generateRandomPhoneNumber() {
            StringBuilder sb = new StringBuilder("+1-");
            for (int i = 0; i < 10; i++) {
                sb.append(random.nextInt(10));
            }
            return sb.toString();
        }

        private static String generateRandomEmail(String firstName, String lastName) {
            String email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@" + getRandomItemFromArray(EMAIL_DOMAINS);
            return email;
        }

        private static List<Person> generateRandomContacts() {
            List<Person> contacts = new ArrayList<>();
            int numContacts = random.nextInt(4); // generate 0 to 3 contacts
            for (int i = 0; i < numContacts; i++) {
                String firstName = getRandomItemFromArray(FIRST_NAMES);
                String lastName = getRandomItemFromArray(LAST_NAMES);
                String phoneNumber = generateRandomPhoneNumber();

                Person contact = new Person(firstName, lastName, phoneNumber);
                contacts.add(contact);
            }
            return contacts;
        }

        private static <T> T getRandomItemFromArray(T[] array) {
            return array[random.nextInt(array.length)];
        }

        public static class Person {
            private String firstName;
            private String lastName;
            private String phoneNumber;

            public Person(String firstName, String lastName, String phoneNumber) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.phoneNumber = phoneNumber;
            }

            public String getFirstName() {
                return firstName;
            }

            public String getLastName() {
                return lastName;
            }
            public String getPhoneNumber() {
                return phoneNumber;
            }
        }

        public static class Customer extends Person {

            private String address;
            private String email;
            private List<Person> contacts;

            public Customer(String firstName, String lastName, String phoneNumber,String address,String email, List<Person> contacts) {
                super(firstName, lastName, phoneNumber);
                this.address = address;
                this.email = email;
                this.contacts = contacts;
            }


            @Override
            public String toString() {
                return "Customer";
            }

            public String getAddress() {
                return address;
            }
            public List<Person> getContacts() {
                return contacts;
            }
            public String getEmail() {
                return email;
            }
        }
    }
