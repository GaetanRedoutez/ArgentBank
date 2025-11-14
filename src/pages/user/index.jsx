import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserProfile,
  userProfile,
} from "../../features/user/userActions";

export const UserPage = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(updateUserProfile(data)).unwrap();
      dispatch(userProfile());
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      alert("Erreur lors de la mise à jour du profil");
    }
  };

  const handleCancel = () => {
    reset({ firstName, lastName });
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {!isEditing ? (
          <>
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}!
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        ) : (
          <EditForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            handleCancel={handleCancel}
            firstName={firstName}
            lastName={lastName}
          />
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

const EditForm = ({
  register,
  handleSubmit,
  onSubmit,
  handleCancel,
  firstName,
  lastName,
}) => {
  return (
    <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Welcome back</h1>
      <div className="edit-inputs">
        <input
          className="edit-input"
          type="text"
          id="firstName"
          placeholder="First Name"
          {...register("firstName", { required: true })}
          defaultValue={firstName}
        />
        <input
          className="edit-input"
          type="text"
          id="lastName"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
          defaultValue={lastName}
        />
      </div>
      <div className="update-buttons">
        <button type="submit" className="save-button">
          Save
        </button>
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
